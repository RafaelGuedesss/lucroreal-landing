'use client';

import { motion } from 'framer-motion';
import { Lightning, MapPin, GasPump, Target, ChartLine, Cloud } from '@phosphor-icons/react';

const features = [
  {
    Icon: Lightning,
    title: 'Lucro Líquido Real',
    description:
      'Cada corrida registrada já desconta combustível e km rodado automaticamente. Você vê o que realmente entrou no bolso — sem surpresas.',
    span: 'md:col-span-2',
    accent: true,
  },
  {
    Icon: MapPin,
    title: 'Odômetro Inteligente',
    description:
      'Rastreamento de quilometragem por GPS. Saiba exatamente quanto km rodou por turno, semana ou mês.',
    span: '',
    accent: false,
  },
  {
    Icon: GasPump,
    title: 'Controle de Abastecimento',
    description:
      'Registre cada abastecimento e o app atualiza o custo por km automaticamente. Nunca mais pague caro sem saber.',
    span: '',
    accent: false,
  },
  {
    Icon: Target,
    title: 'Metas de Ganho',
    description:
      'Defina sua meta diária ou mensal. O indicador circular mostra em tempo real o quanto falta para bater.',
    span: 'md:col-span-2',
    accent: false,
  },
  {
    Icon: ChartLine,
    title: 'Histórico Completo',
    description:
      'Veja todos os seus turnos com filtros por dia, semana, mês ou período. Compare períodos e evolua sempre.',
    span: '',
    accent: false,
  },
  {
    Icon: Cloud,
    title: 'Backup na Nuvem',
    description:
      'Seus dados salvos em tempo real. Troque de celular sem perder nada. Acesse de qualquer dispositivo.',
    span: 'md:col-span-2',
    accent: false,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 px-6"
      style={{ background: 'var(--section-a)' }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-orange-500 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Funcionalidades
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-4 leading-[1.05]">
            Tudo que um motorista
            <br />
            <span className="text-zinc-400 dark:text-zinc-500">profissional precisa</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-[52ch] leading-relaxed">
            Desenvolvido por quem entende a rotina de motoristas de app, freteiros e entregadores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {features.map((f, i) => {
            const Icon = f.Icon;
            return (
              <motion.div
                key={f.title}
                className={f.span}
                initial={{ opacity: 0, y: 36, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <motion.div
                  className={`group h-full p-6 rounded-2xl border cursor-default ${
                    f.accent
                      ? 'bg-orange-50 dark:bg-orange-500/5 border-orange-200 dark:border-orange-500/15'
                      : 'bg-zinc-50 dark:bg-zinc-900/35 border-zinc-100 dark:border-white/5'
                  }`}
                  whileHover={{
                    y: -4,
                    borderColor: f.accent ? 'rgba(249,115,22,0.4)' : 'rgba(161,161,170,0.4)',
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                >
                  <motion.div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                      f.accent
                        ? 'bg-orange-100 dark:bg-orange-500/15'
                        : 'bg-zinc-100 dark:bg-zinc-800/80'
                    }`}
                    whileHover={{
                      scale: 1.18,
                      rotate: [0, -8, 8, 0],
                      transition: { duration: 0.4, ease: 'easeInOut' },
                    }}
                  >
                    <Icon
                      weight="bold"
                      size={19}
                      className={f.accent ? 'text-orange-500 dark:text-orange-400' : 'text-zinc-500 dark:text-zinc-400'}
                    />
                  </motion.div>
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-[1.0625rem] tracking-tight mb-2">
                    {f.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{f.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
