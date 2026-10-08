import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TutorialVideo from '@/components/TutorialVideo';
import { tutorials, categoryOrder } from '@/lib/tutorials';

export const metadata: Metadata = {
  title: 'Tutoriais — Lucro Real',
  description:
    'Vídeos curtos ensinando a usar o Lucro Real: cadastro do veículo, corridas, abastecimentos, metas e mais.',
};

export default function TutoriaisPage() {
  const categories = categoryOrder
    .map((category) => ({ category, items: tutorials.filter((t) => t.category === category) }))
    .filter((c) => c.items.length > 0);

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

          {categories.map(({ category, items }) => (
            <section key={category} className="mb-20 last:mb-0">
              <h2 className="text-xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 mb-8">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                {items.map((t) => (
                  <article key={t.slug} id={t.slug} className="flex flex-col items-center sm:items-start gap-5">
                    <TutorialVideo tutorial={t} />
                    <div className="w-full max-w-[260px] sm:max-w-[280px]">
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <h3 className="font-bold text-zinc-900 dark:text-zinc-50">{t.title}</h3>
                        <span className="shrink-0 whitespace-nowrap mt-0.5 text-[11px] font-semibold text-orange-600 dark:text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full">
                          {t.duration}
                        </span>
                      </div>
                      <p className="text-zinc-500 text-sm leading-relaxed">{t.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
