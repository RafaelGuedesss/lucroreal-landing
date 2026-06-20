import { CheckCircle, DeviceMobile } from '@phosphor-icons/react/dist/ssr';

export default function SucessoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: 'var(--section-a, #f8f9fa)' }}>

      <div className="w-full max-w-md text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
          <CheckCircle weight="fill" size={48} className="text-green-500" />
        </div>

        <h1 className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-3">
          Assinatura ativada!
        </h1>
        <p className="text-zinc-500 text-base mb-8">
          Seu pagamento foi confirmado. Agora volte ao app e toque em{' '}
          <span className="font-semibold text-zinc-700 dark:text-zinc-300">
            "Já assinei — verificar acesso"
          </span>{' '}
          para liberar o acesso.
        </p>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/8 rounded-2xl p-5 flex items-center gap-4 text-left shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
            <DeviceMobile weight="fill" size={22} className="text-orange-500" />
          </div>
          <div>
            <p className="text-zinc-900 dark:text-zinc-50 font-semibold text-sm">Volte para o Lucro Real</p>
            <p className="text-zinc-500 text-xs mt-0.5">Toque em "Já assinei" na tela do app</p>
          </div>
        </div>
      </div>
    </main>
  );
}
