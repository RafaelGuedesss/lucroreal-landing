'use client';

import { motion } from 'framer-motion';
import { GooglePlayLogo, CreditCard, ShieldCheck, DeviceMobile } from '@phosphor-icons/react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.lucroreal.app';

export default function CTA() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: 'var(--section-a)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-white/6 p-12 md:p-16 bg-zinc-50 dark:bg-[#111113]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glows */}
          <div
            className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.05) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 px-3 py-1.5 rounded-full mb-7">
              Não perca mais dinheiro
            </span>

            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-5 leading-[1.05]">
              Todo dia que passa sem
              <br />o Lucro Real é lucro
              <br />que você não vê
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-9 max-w-[52ch]">
              Motoristas profissionais que usam o Lucro Real relatam aumento médio de{' '}
              <span className="text-zinc-900 dark:text-zinc-200 font-semibold">R$ 400 a R$ 800 por mês</span>{' '}
              só por tomar decisões melhores com dados reais.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-6">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-4 rounded-2xl transition-all duration-200 active:scale-[0.98] shadow-[0_0_36px_rgba(249,115,22,0.32)] text-[0.9375rem]"
              >
                <GooglePlayLogo weight="fill" size={18} />
                Baixar o App
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold px-7 py-4 rounded-2xl border border-zinc-300 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/20 transition-all duration-200 text-[0.9375rem]"
              >
                <CreditCard size={17} />
                Assinar Plano
              </a>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {[
                { Icon: ShieldCheck, text: 'Sem cartão de crédito' },
                { Icon: DeviceMobile, text: 'Android' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-600">
                  <Icon size={13} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
