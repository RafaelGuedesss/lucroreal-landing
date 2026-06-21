import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: NextRequest) {
  try {
    const { uid, session_id } = await req.json() as { uid?: string; session_id?: string };

    if (!uid || !session_id) {
      return NextResponse.json({ error: 'uid e session_id obrigatórios' }, { status: 400 });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Verifica a sessão no Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Pagamento não confirmado.' }, { status: 402 });
    }

    const customerId = session.customer as string;

    // Ativa o usuário no Supabase — cria a linha se não existir (upsert)
    const { error } = await supabase
      .from('perfil_usuario')
      .upsert({
        id: uid,
        status_assinatura: 'active',
        stripe_customer_id: customerId,
        trial_end: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }, { onConflict: 'id' });

    if (error) {
      console.error('Erro ao ativar usuário:', error.message);
      return NextResponse.json({ error: 'Erro ao ativar assinatura.' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('Ativar error:', err.message);
    return NextResponse.json({ error: err.message ?? 'Erro interno' }, { status: 500 });
  }
}
