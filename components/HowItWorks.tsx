'use client';

import { motion } from 'framer-motion';
import { Car, DeviceMobileSpeaker, CurrencyDollar } from '@phosphor-icons/react';

const steps = [
  {
    number: '01',
    Icon: Car,
    title: 'Configure seu veículo',
    description:
      'Informe a média de consumo e o preço do combustível. Leva 2 minutos. O app atualiza os valores conforme você abastece.',
  },
  {
    number: '02',
    Icon: DeviceMobileSpeaker,
    title: 'Registre cada corrida',
    description:
      'Inicie o turno e registre o odômetro do veículo no app. Na primeira coleta, toque em Nova Corrida e siga o passo a passo: informe APP ou Particular, origem, destino e valor. Inicie a corrida e, ao chegar, toque em Cheguei no Destino — o app finaliza e mostra o lucro real na hora. Ao retornar à base, informe o odômetro final e o app calcula ganhos, custo de deslocamento, viagem e retorno com precisão cirúrgica. Se houver divergência no GPS, basta tocar em Sincronizar.',
  },
  {
    number: '03',
    Icon: CurrencyDollar,
    title: 'Acompanhe seu lucro real',
    description:
      'Veja o painel com lucro líquido, bruto, km rodado e meta do dia — tudo em tempo real. Decida com dados, não com achismo.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-6"
      style={{ background: 'var(--section-b)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-orange-500 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Como Funciona
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-4 leading-[1.05]">
            Do zero ao controle
            <br />
            <span className="text-zinc-400 dark:text-zinc-500">em 3 passos</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-[50ch] leading-relaxed">
            Sem planilha, sem complicação. Feito para quem dirige e não tem tempo a perder.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 relative">
          {/* Static dashed line (base) */}
          <div className="hidden lg:block absolute top-9 left-[calc(16.66%+36px)] right-[calc(16.66%+36px)] h-px border-t border-dashed border-zinc-300 dark:border-zinc-800" />

          {/* Animated fill line — grows in from left on scroll */}
          <motion.div
            className="hidden lg:block absolute top-[35px] left-[calc(16.66%+36px)] right-[calc(16.66%+36px)] h-[1.5px] bg-orange-400 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
              <motion.div
                key={step.number}
                className="flex flex-col gap-5"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.16, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Icon box with spring overshoot pop */}
                <motion.div
                  className="relative w-[72px] h-[72px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/6 rounded-2xl flex items-center justify-center shrink-0 shadow-sm dark:shadow-none"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 14,
                    delay: 0.2 + i * 0.16,
                  }}
                  whileHover={{ scale: 1.08, rotate: -4, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
                >
                  <Icon weight="bold" size={26} className="text-orange-500 dark:text-orange-400" />
                  {/* Badge number with its own spring pop */}
                  <motion.span
                    className="absolute -top-2.5 -right-2.5 text-[10px] font-black bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center leading-none"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 12,
                      delay: 0.4 + i * 0.16,
                    }}
                  >
                    {i + 1}
                  </motion.span>
                </motion.div>

                <div>
                  <p className="text-zinc-400 dark:text-zinc-700 text-xs font-mono mb-1.5 tracking-wider">
                    {step.number}
                  </p>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-xl tracking-tight mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-14 p-6 md:p-7 rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm dark:shadow-none"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">
              Pronto para usar em 2 minutos
            </p>
            <p className="text-zinc-500 text-sm">Comece grátis. Sem cartão de crédito.</p>
          </div>
          <motion.a
            href="#pricing"
            className="shrink-0 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-5 py-2.5 rounded-xl text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Começar agora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
