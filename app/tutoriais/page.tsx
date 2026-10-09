import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TutorialsList from '@/components/TutorialsList';

export const metadata: Metadata = {
  title: 'Tutoriais — Lucro Real',
  description:
    'Vídeos curtos ensinando a usar o Lucro Real: cadastro do veículo, corridas, abastecimentos, metas e mais.',
};

export default function TutoriaisPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6" style={{ background: 'var(--section-a)' }}>
        <div className="max-w-7xl mx-auto">
          <header className="mb-16">
            <p className="text-orange-500 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase mb-3">
              Tutoriais
            </p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-4 leading-[1.05]">
              Aprenda a usar
              <br />
              <span className="text-zinc-400 dark:text-zinc-500">o Lucro Real</span>
            </h1>
            <p className="text-zinc-500 text-lg max-w-[52ch] leading-relaxed">
              Vídeos curtos mostrando cada parte do app. Ficou com dúvida? Fale com a gente pelo
              WhatsApp no rodapé da página.
            </p>
          </header>

          <TutorialsList />
        </div>
      </main>
      <Footer />
    </>
  );
}
