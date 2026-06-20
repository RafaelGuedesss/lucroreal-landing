'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Check, Lightning, ShieldCheck, Lock } from '@phosphor-icons/react';

const features = [
  'Lucro líquido por corrida (automático)',
  'Odômetro com rastreamento GPS',
  'Controle de abastecimentos',
  'Metas diárias e mensais',
  'Histórico ilimitado de corridas',
  'Backup seguro na nuvem',
  'Relatórios por dia, semana e mês',
  'Suporte via WhatsApp',
];

function AssinarForm() {
  const searchParams = useSearchParams();
  const uid = searchParams.get('uid');

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleCheckout = async () => {
    try {
      setLoading(true);
      setError('');

      if (!uid && !email.trim()) {
        setError('Informe seu e-mail para continuar.');
        return;
      }

      const body = uid ? { uid } : { email: email.trim() };

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error ?? 'Erro ao gerar link de pagamento.');
      }

      window.location.href = data.url;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: 'var(--section-a, #f8f9fa)' }}
    >
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-semibold bg-orange-500/10 border border-orange-500/25 text-orange-600 px-3 py-1.5 rounded-full mb-4">
            <Lightning weight="fill" size={12} />
            {uid ? 'Seu período gratuito acabou' : 'Plano mensal'}
          </span>
          <h1 className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-2">
            {uid ? 'Ative o Lucro Real' : 'Assine o Lucro Real'}
          </h1>
          <p className="text-zinc-500 text-sm">
            {uid
              ? 'Continue acessando todas as funcionalidades sem interrupção.'
              : 'Acesso completo a todas as funcionalidades por R$ 29,90/mês.'}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-white/8 shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-7">
          {/* Price */}
          <div className="mb-5">
            <p className="text-zinc-500 text-xs mb-1">Lucro Real Pro</p>
            <div className="flex items-end gap-1.5">
              <span className="text-zinc-900 dark:text-zinc-50 text-4xl font-black tracking-tighter leading-none">
                R$ 29,90
              </span>
              <span className="text-zinc-400 text-sm mb-0.5">/mês</span>
            </div>
            <p className="text-zinc-400 text-xs mt-1.5">Cancele a qualquer momento</p>
          </div>

          <div className="h-px bg-zinc-100 dark:bg-white/5 mb-5" />

          {/* Features */}
          <ul className="flex flex-col gap-2.5 mb-6">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-500/12 flex items-center justify-center shrink-0">
                  <Check weight="bold" size={11} className="text-orange-500" />
                </div>
                <span className="text-zinc-700 dark:text-zinc-300 text-sm">{f}</span>
              </li>
            ))}
          </ul>

          {/* Email field for visitors without uid */}
          {!uid && (
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 px-4 py-3 rounded-xl border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 text-sm outline-none focus:border-orange-400 transition-colors"
            />
          )}

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          {/* CTA */}
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 disabled:bg-orange-300 text-white font-bold py-4 rounded-2xl transition-all duration-200 shadow-[0_0_28px_rgba(249,115,22,0.22)] text-[0.9375rem]"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Lock weight="fill" size={16} />
                Assinar com segurança
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-1.5 mt-4 text-zinc-400 text-xs">
            <ShieldCheck size={13} />
            Pagamento seguro via Stripe · SSL
          </div>
        </div>
      </div>
    </main>
  );
}

export default function AssinarPage() {
  return (
    <Suspense>
      <AssinarForm />
    </Suspense>
  );
}
