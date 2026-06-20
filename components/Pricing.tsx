'use client';

import { motion } from 'framer-motion';
import { Check, Lightning, WhatsappLogo } from '@phosphor-icons/react';

const planFeatures = [
  'Lucro líquido por corrida (automático)',
  'Odômetro com rastreamento GPS',
  'Controle de abastecimentos',
  'Metas diárias e mensais',
  'Histórico ilimitado de corridas',
  'Backup seguro na nuvem',
  'Relatórios por dia, semana e mês',
  'Suporte via WhatsApp',
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055, delayChildren: 0.3 },
  },
};

const listItemVariant = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const bulletVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const bulletItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 px-6"
      style={{ background: 'var(--section-a)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-orange-500 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase mb-3">
              Preço
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-5 leading-[1.05]">
              Um plano.
              <br />
              <span className="text-zinc-400 dark:text-zinc-500">Acesso total.</span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-[44ch]">
              Sem tiers confusos. Pague um valor fixo e tenha todas as funcionalidades. Cancele
              quando quiser.
            </p>

            <motion.div
              className="mt-10 space-y-4"
              variants={bulletVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {[
                { label: 'Retorno real', value: 'Motoristas relatam +R$ 400 a R$ 800/mês' },
                { label: 'Custo', value: 'Menos que uma passagem de ônibus por dia' },
                { label: 'Risco zero', value: '30 dias grátis, sem cartão de crédito' },
              ].map((item) => (
                <motion.div key={item.label} className="flex items-start gap-3" variants={bulletItem}>
                  <motion.div
                    className="w-1 h-1 rounded-full bg-orange-500 mt-2 shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  />
                  <div>
                    <span className="text-zinc-700 dark:text-zinc-400 text-sm font-medium">{item.label}: </span>
                    <span className="text-zinc-500 text-sm">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: card */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative p-7 rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-white/8 shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_24px_60px_-16px_rgba(0,0,0,0.55)]">
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-52 h-52 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)' }}
              />

              <div className="inline-flex items-center gap-1.5 text-xs font-medium bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 px-3 py-1.5 rounded-full mb-5">
                <Lightning weight="fill" size={11} />
                30 dias grátis · Sem cartão de crédito
              </div>

              <div className="mb-1">
                <p className="text-zinc-500 text-[13px] mb-1">Lucro Real</p>
                <motion.div
                  className="flex items-end gap-1.5"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 160, damping: 18, delay: 0.2 }}
                >
                  <span className="text-zinc-900 dark:text-zinc-50 text-[2.75rem] font-black tracking-tighter leading-none">
                    R$ 29,90
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-500 text-sm mb-0.5">/mês</span>
                </motion.div>
                <p className="text-zinc-400 dark:text-zinc-600 text-xs mt-2">
                  Menos de R$&nbsp;1 por dia — menos que uma passagem de ônibus
                </p>
              </div>

              <div className="my-5 h-px bg-zinc-100 dark:bg-white/5" />

              <motion.ul
                className="flex flex-col gap-2.5 mb-6"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {planFeatures.map((f) => (
                  <motion.li key={f} className="flex items-center gap-3" variants={listItemVariant}>
                    <motion.div
                      className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-500/12 flex items-center justify-center shrink-0"
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Check weight="bold" size={11} className="text-orange-500 dark:text-orange-400" />
                    </motion.div>
                    <span className="text-zinc-700 dark:text-zinc-300 text-sm">{f}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.a
                href="/assinar"
                className="block w-full text-center bg-orange-500 text-white font-bold py-3.5 rounded-2xl shadow-[0_0_28px_rgba(249,115,22,0.22)] text-[0.9375rem]"
                whileHover={{ scale: 1.02, backgroundColor: '#fb923c', boxShadow: '0 0 40px rgba(249,115,22,0.4)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                Assinar Plano
              </motion.a>

              <div className="flex items-center justify-center gap-1.5 mt-4 text-zinc-400 dark:text-zinc-600 text-xs">
                <WhatsappLogo size={13} />
                Dúvidas? Fale com a gente no WhatsApp
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
