'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from '@phosphor-icons/react';
import TutorialVideo from './TutorialVideo';
import { featuredTutorial } from '@/lib/tutorials';

export default function TutorialHighlight() {
  return (
    <section
      id="tutorial"
      className="py-24 px-6"
      style={{ background: 'var(--section-a)' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-orange-500 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Veja como usar
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-4 leading-[1.05]">
            Aprenda em
            <br />
            <span className="text-zinc-400 dark:text-zinc-500">1 minuto</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-[46ch] leading-relaxed mb-8">
            {featuredTutorial.description} Quer ver com mais detalhes? Temos tutoriais completos
            de cada parte do app.
          </p>
          <Link
            href="/tutoriais"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-6 py-3.5 rounded-2xl transition-colors"
          >
            <PlayCircle weight="fill" size={20} />
            Ver todos os tutoriais
            <ArrowRight weight="bold" size={16} />
          </Link>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <TutorialVideo tutorial={featuredTutorial} size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
