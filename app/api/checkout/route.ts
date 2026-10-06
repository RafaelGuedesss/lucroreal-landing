import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

async function findUserIdByEmail(
  supabase: SupabaseClient,
  email: string
): Promise<string | undefined> {
  const target = email.trim().toLowerCase();
  const perPage = 1000;
  for (let page = 1; ; page++) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage });
    if (error) throw error;
    const user = data.users.find((u) => u.email?.toLowerCase() === target);
    if (user) return user.id;
    if (data.users.length < perPage) return undefined;
  }
}

export async function POST(req: NextRequest) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      return NextResponse.json({ error: 'Stripe não configurado.' }, { status: 500 });
    }

    const stripe = new Stripe(stripeKey);

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const body = await req.json();
    const { email } = body as { uid?: string; email?: string };
    let { uid } = body as { uid?: string };

    if (!uid && !email) {
      return NextResponse.json({ error: 'uid ou email obrigatório' }, { status: 400 });
    }

    // Sem uid (visitante do site): vincula a assinatura à conta do app pelo e-mail
    if (!uid && email) {
      uid = await findUserIdByEmail(supabase, email);
      if (!uid) {
        return NextResponse.json(
          { error: 'Não encontramos uma conta com esse e-mail. Cadastre-se primeiro no app Lucro Real e use o mesmo e-mail aqui.' },
          { status: 404 }
        );
      }
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.mylucroreal.com.br';
    let customerId: string | undefined;
    let customerEmail: string | undefined = email;

    if (uid) {
      const { data: perfil } = await supabase
        .from('perfil_usuario')
        .select('stripe_customer_id')
        .eq('id', uid)
        .maybeSingle();

      customerId = perfil?.stripe_customer_id ?? undefined;

      if (!customerEmail) {
        const { data: authUser } = await supabase.auth.admin.getUserById(uid);
        customerEmail = authUser?.user?.email;
      }

      if (!customerId) {
        const customer = await stripe.customers.create({
          email: customerEmail,
          metadata: { supabase_id: uid },
        });
        customerId = customer.id;

        await supabase
          .from('perfil_usuario')
          .upsert({ id: uid, stripe_customer_id: customerId }, { onConflict: 'id' });
      }
    }

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: 'subscription',
      line_items: [{ price: 'price_1TkrOBDtUo0Y1VJCmHEqu06K', quantity: 1 }],
      success_url: uid
        ? `${siteUrl}/assinar/sucesso?uid=${uid}&session_id={CHECKOUT_SESSION_ID}`
        : `${siteUrl}/assinar/sucesso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: uid ? `${siteUrl}/assinar?uid=${uid}` : `${siteUrl}/assinar`,
      subscription_data: {
        metadata: uid ? { supabase_id: uid } : {},
      },
    };

    if (customerId) {
      sessionParams.customer = customerId;
    } else {
      sessionParams.customer_email = customerEmail;
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Checkout error:', err.message);
    return NextResponse.json({ error: err.message ?? 'Erro interno' }, { status: 500 });
  }
}
