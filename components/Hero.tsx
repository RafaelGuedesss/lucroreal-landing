'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Lightning, ArrowRight, ShieldCheck, DeviceMobile } from '@phosphor-icons/react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const phoneY = useTransform(scrollY, [0, 600], [0, -55]);
  const phoneOpacity = useTransform(scrollY, [0, 500], [1, 0.4]);
  const bgGlowY = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16"
      style={{ background: 'var(--section-a)' }}
    >
      {/* Parallax ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 40%, var(--hero-glow) 0%, transparent 65%)',
          y: bgGlowY,
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-6 pb-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-14 lg:gap-8 items-center min-h-[84dvh]">

          {/* Left: content */}
          <motion.div
            className="flex flex-col gap-5 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 text-xs font-medium bg-orange-500/10 border border-orange-500/25 text-orange-600 dark:text-orange-400 px-3.5 py-1.5 rounded-full self-start">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-orange-500 dark:bg-orange-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                Para motoristas de app, freteiros e entregadores
              </span>

              <h1 className="text-[clamp(2.8rem,6vw,4.5rem)] font-black tracking-tighter leading-[0.92] text-zinc-900 dark:text-zinc-50">
                Descubra seu{' '}
                <motion.span
                  style={{
                    background: 'linear-gradient(135deg, #f97316, #fb923c)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  lucro real
                </motion.span>
                <br />
                em cada corrida
              </h1>
              <p className="text-[1.0625rem] text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[52ch]">
                Chega de trabalhar no escuro. O Lucro Real calcula automaticamente quanto você{' '}
                <span className="text-zinc-900 dark:text-zinc-200 font-medium">realmente ganha</span>{' '}
                depois de descontar combustível, km rodado e todos os custos — em tempo real.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 shadow-[0_0_28px_rgba(249,115,22,0.3)]"
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(249,115,22,0.45)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <Lightning weight="fill" size={17} />
                Testar 30 Dias Grátis
              </motion.a>
              <motion.a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium px-6 py-3.5 rounded-xl border border-zinc-300 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/20 transition-all duration-200"
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                Ver como funciona
                <ArrowRight size={15} />
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
              {[
                { Icon: ShieldCheck, text: 'Sem cartão de crédito' },
                { Icon: DeviceMobile, text: 'Android' },
                { Icon: ShieldCheck, text: 'Cancele quando quiser' },
              ].map(({ Icon, text }, i) => (
                <motion.div
                  key={text}
                  className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                >
                  <Icon size={13} className="text-zinc-400 dark:text-zinc-700" />
                  {text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: phone mockup with scroll parallax */}
          <motion.div
            className="flex items-center justify-center lg:justify-end order-1 lg:order-2"
            style={{ y: phoneY }}
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <PhoneMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <motion.div
      className="relative"
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Glow */}
      <motion.div
        className="absolute inset-4 rounded-[36px] blur-3xl"
        style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.18) 0%, transparent 70%)' }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Phone frame */}
      <div className="relative w-[288px] h-[580px] bg-zinc-900 rounded-[42px] border border-zinc-300 dark:border-white/10 overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.08),0_24px_48px_rgba(0,0,0,0.22),0_48px_80px_rgba(0,0,0,0.12)] dark:shadow-[0_32px_64px_rgba(0,0,0,0.65)]">

        {/* Dynamic island notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[88px] h-[22px] bg-zinc-950 rounded-full z-20 pointer-events-none" />

        {/* Real screenshot — slide up reveal, no opacity fade */}
        <motion.div
          className="absolute inset-0 top-9"
          initial={{ y: 30, scale: 1.04 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/screenshots/index1.jpg"
            alt="Lucro Real - Dashboard principal"
            fill
            className="object-cover object-top"
            sizes="288px"
            quality={100}
            priority
          />
        </motion.div>

        {/* Bottom home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/20 z-20 pointer-events-none" />
      </div>
    </motion.div>
  );
}
