import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

async function ativarAssinatura(uid: string, sessionId: string) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== 'paid') return;

    const customerId = session.customer as string;
    await supabase
      .from('perfil_usuario')
      .upsert({
        id: uid,
        status_assinatura: 'active',
        stripe_customer_id: customerId,
        trial_end: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }, { onConflict: 'id' });
  } catch (err) {
    console.error('Erro ao ativar assinatura:', err);
  }
}

export default async function SucessoPage({
  searchParams,
}: {
  searchParams: Promise<{ uid?: string; session_id?: string }>;
}) {
  const { uid, session_id } = await searchParams;

  // Ativação acontece no servidor antes de qualquer coisa chegar ao browser
  if (uid && session_id) {
    await ativarAssinatura(uid, session_id);
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: 'var(--section-a, #f8f9fa)' }}
    >
      <div className="w-full max-w-md text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
          <svg width="48" height="48" viewBox="0 0 256 256" fill="none">
            <path
              d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm45.66 85.66-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32Z"
              fill="#22c55e"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-black tracking-tighter text-zinc-900 mb-3">
          Assinatura ativada!
        </h1>
        <p className="text-zinc-500 text-base mb-8">
          Seu pagamento foi confirmado. Agora volte ao app e toque em{' '}
          <span className="font-semibold text-zinc-700">
            &ldquo;Já assinei — verificar acesso&rdquo;
          </span>{' '}
          para liberar o acesso.
        </p>

        <div className="bg-white border border-zinc-200 rounded-2xl p-5 flex items-center gap-4 text-left shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
            <svg width="22" height="22" viewBox="0 0 256 256" fill="none">
              <path
                d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24Zm8 200a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Zm-48-24a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z"
                fill="#f97316"
              />
            </svg>
          </div>
          <div>
            <p className="text-zinc-900 font-semibold text-sm">Volte para o Lucro Real</p>
            <p className="text-zinc-500 text-xs mt-0.5">Toque em &ldquo;Já assinei&rdquo; na tela do app</p>
          </div>
        </div>
      </div>
    </main>
  );
}
