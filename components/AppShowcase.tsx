'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChartBar, Target, GasPump, ClockCounterClockwise, CheckCircle, CaretRight } from '@phosphor-icons/react';

const screens = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    Icon: ChartBar,
    images: [
      '/screenshots/index1.jpg',
      '/screenshots/index2.jpg',
    ],
    title: 'Lucro líquido em destaque',
    description:
      'Ao abrir o app você já vê o que ganhou na semana, quantas corridas fez e o km rodado — sem precisar calcular nada.',
    highlights: ['Odômetro central com GPS', 'Filtros por dia, semana e mês', 'Custos por etapa em cada corrida'],
  },
  {
    id: 'metas',
    label: 'Metas',
    Icon: Target,
    images: [
      '/screenshots/metas1.jpg',
    ],
    title: 'Meta mensal com indicador visual',
    description:
      'Defina seu objetivo e acompanhe o progresso com o indicador circular em tempo real. Saiba exatamente quanto falta para atingir.',
    highlights: ['Meta personalizada por período', 'Percentual e valor restante', 'Atualização automática por corrida'],
  },
  {
    id: 'combustivel',
    label: 'Combustível',
    Icon: GasPump,
    images: [
      '/screenshots/fuel1.jpg',
      '/screenshots/fuel2.jpg',
    ],
    title: 'Controle total do combustível',
    description:
      'Registre cada abastecimento. Veja custo por km, média km/lt, gasto total do período e o histórico completo de cada parada.',
    highlights: ['Custo real por km', 'Histórico de abastecimentos', 'Média automática km/lt'],
  },
  {
    id: 'historico',
    label: 'Histórico',
    Icon: ClockCounterClockwise,
    images: [
      '/screenshots/hist1.jpg',
      '/screenshots/hist2.jpg',
      '/screenshots/hist3.jpg',
      '/screenshots/hist4.jpg',
    ],
    title: 'Histórico completo com gráficos',
    description:
      'Compare semanas e dias em gráficos de barras. Veja custo vs lucro real, detalhe de cada corrida e exporte relatórios em PDF.',
    highlights: ['Gráfico de barras semanal e diário', 'Detalhe completo por corrida', 'Exportação em PDF'],
  },
];

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [imgIndex, setImgIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const current = screens.find((s) => s.id === activeTab)!;
  const total = current.images.length;

  function switchTab(id: string) {
    setActiveTab(id);
    setImgIndex(0);
    setDirection(1);
  }

  function nextImage() {
    if (total <= 1) return;
    setDirection(1);
    setImgIndex((i) => (i + 1) % total);
  }

  function goToImage(idx: number) {
    setDirection(idx > imgIndex ? 1 : -1);
    setImgIndex(idx);
  }

  return (
    <section
      id="showcase"
      className="py-24 px-6"
      style={{ background: 'var(--section-b)' }}
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
            O App
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-4 leading-[1.05]">
            Telas reais,
            <br />
            <span className="text-zinc-400 dark:text-zinc-500">sem filtro</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-[50ch] leading-relaxed">
            Sem mockup inventado. O que você vê é exatamente o app que vai usar no dia a dia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-20 items-center">

          {/* Left: tabs + description */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">

            {/* Tab buttons */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {screens.map((s) => {
                const Icon = s.Icon;
                const isActive = activeTab === s.id;
                return (
                  <motion.button
                    key={s.id}
                    onClick={() => switchTab(s.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'bg-orange-500 text-white shadow-[0_0_22px_rgba(249,115,22,0.28)]'
                        : 'bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                    }`}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <Icon weight="bold" size={14} />
                    {s.label}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Text — swaps on tab change */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-5"
              >
                <h3 className="text-2xl md:text-[1.75rem] font-black tracking-tighter text-zinc-900 dark:text-zinc-50 leading-tight">
                  {current.title}
                </h3>
                <p className="text-zinc-500 text-[1.0rem] leading-relaxed max-w-[46ch]">
                  {current.description}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {current.highlights.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <CheckCircle weight="fill" size={16} className="text-orange-500 dark:text-orange-400 shrink-0" />
                      <span className="text-zinc-600 dark:text-zinc-400 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Image counter hint */}
                {total > 1 && (
                  <p className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-600 text-xs">
                    <CaretRight size={12} weight="bold" className="text-orange-400" />
                    Clique no celular para ver mais telas ({imgIndex + 1}/{total})
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Trust nudge */}
            <motion.div
              className="flex items-center gap-3 pt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <div className="h-px flex-1 bg-zinc-200 dark:bg-white/6" />
              <p className="text-zinc-400 dark:text-zinc-600 text-xs shrink-0">
                Telas capturadas de um usuário real
              </p>
              <div className="h-px flex-1 bg-zinc-200 dark:bg-white/6" />
            </motion.div>
          </div>

          {/* Right: phone */}
          <motion.div
            className="flex flex-col items-center gap-4 order-1 lg:order-2"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glow */}
              <motion.div
                className="absolute inset-4 rounded-[36px] blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.2) 0%, transparent 70%)' }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Phone frame — clickable to advance */}
              <motion.div
                className={`relative w-[270px] h-[560px] bg-zinc-900 rounded-[40px] border border-white/10 overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.35)] dark:shadow-[0_32px_64px_rgba(0,0,0,0.65)] ${total > 1 ? 'cursor-pointer' : ''}`}
                onClick={nextImage}
                whileTap={total > 1 ? { scale: 0.97 } : {}}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[88px] h-[22px] bg-zinc-950 rounded-full z-20 pointer-events-none" />

                {/* Screenshot crossfade */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`${activeTab}-${imgIndex}`}
                    className="absolute inset-0 top-9"
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -30 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={current.images[imgIndex]}
                      alt={current.title}
                      fill
                      className="object-cover object-top"
                      sizes="270px"
                      priority={activeTab === 'dashboard' && imgIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Next arrow overlay (only when multiple images) */}
                {total > 1 && (
                  <div className="absolute bottom-10 right-3 z-20 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center pointer-events-none">
                    <CaretRight size={13} weight="bold" className="text-white" />
                  </div>
                )}

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/20 z-20 pointer-events-none" />
              </motion.div>
            </motion.div>

            {/* Dot indicators */}
            {total > 1 && (
              <div className="flex items-center gap-2">
                {current.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToImage(idx)}
                    className={`rounded-full transition-all duration-200 ${
                      idx === imgIndex
                        ? 'w-5 h-2 bg-orange-500'
                        : 'w-2 h-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-500'
                    }`}
                    aria-label={`Imagem ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
