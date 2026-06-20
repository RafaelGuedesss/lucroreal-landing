'use client';

export default function SucessoPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: 'var(--section-a, #f8f9fa)' }}
    >
      <div className="w-full max-w-md text-center">
        {/* Ícone de sucesso — SVG inline, sem dependências */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
          <svg width="48" height="48" viewBox="0 0 256 256" fill="none">
            <path
              d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm45.66 85.66-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32Z"
              fill="#22c55e"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-3">
          Assinatura ativada!
        </h1>
        <p className="text-zinc-500 text-base mb-8">
          Seu pagamento foi confirmado. Agora volte ao app e toque em{' '}
          <span className="font-semibold text-zinc-700 dark:text-zinc-300">
            &ldquo;Já assinei — verificar acesso&rdquo;
          </span>{' '}
          para liberar o acesso.
        </p>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/8 rounded-2xl p-5 flex items-center gap-4 text-left shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
            {/* Ícone de celular — SVG inline */}
            <svg width="22" height="22" viewBox="0 0 256 256" fill="none">
              <path
                d="M176 16H80a24 24 0 0 0-24 24v176a24 24 0 0 0 24 24h96a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24Zm8 200a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Zm-48-24a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z"
                fill="#f97316"
              />
            </svg>
          </div>
          <div>
            <p className="text-zinc-900 dark:text-zinc-50 font-semibold text-sm">Volte para o Lucro Real</p>
            <p className="text-zinc-500 text-xs mt-0.5">Toque em &ldquo;Já assinei&rdquo; na tela do app</p>
          </div>
        </div>
      </div>
    </main>
  );
}
