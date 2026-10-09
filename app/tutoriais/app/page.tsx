import type { Metadata } from 'next';
import TutorialsList from '@/components/TutorialsList';

// Versão aberta pela tela de Ajuda do app: só os vídeos, sem menu, preço
// ou links de assinatura (política de pagamentos do Google Play).
export const metadata: Metadata = {
  title: 'Tutoriais — Lucro Real',
  robots: { index: false },
};

export default function TutoriaisAppPage() {
  return (
    <main className="flex-1 pt-10 pb-16 px-6" style={{ background: 'var(--section-a)' }}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <p className="text-orange-500 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Tutoriais
          </p>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-3 leading-[1.05]">
            Aprenda a usar
            <br />
            <span className="text-zinc-400 dark:text-zinc-500">o Lucro Real</span>
          </h1>
          <p className="text-zinc-500 text-base max-w-[52ch] leading-relaxed">
            Vídeos curtos mostrando cada parte do app. Toque no play para assistir.
          </p>
        </header>

        <TutorialsList />
      </div>
    </main>
  );
}
