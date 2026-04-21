'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const stats = [
  {
    prefix: '+',
    value: 2000,
    suffix: '',
    label: 'motoristas ativos',
    description: 'Profissionais que gerenciam lucro todo dia com o app',
  },
  {
    prefix: 'R$\u00a0',
    value: 6000,
    suffix: '/mês',
    label: 'ganho médio extra',
    description: 'Valor adicional relatado após os primeiros 3 meses de uso',
  },
  {
    prefix: '',
    value: 10,
    suffix: 's',
    label: 'por corrida',
    description: 'Tempo médio para registrar e calcular o lucro de uma corrida',
  },
];

function Counter({
  from,
  to,
  prefix,
  suffix,
  duration = 1.8,
}: {
  from: number;
  to: number;
  prefix: string;
  suffix: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = prefix + Math.round(v).toLocaleString('pt-BR') + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, from, to, prefix, suffix, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {from.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      className="py-20 px-6 border-y border-zinc-100 dark:border-white/5"
      style={{ background: 'var(--section-b)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 dark:bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col gap-1.5 px-8 py-10 bg-white dark:bg-zinc-950"
              style={{ background: 'var(--section-b)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 tabular-nums">
                <Counter
                  from={0}
                  to={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  duration={1.6 + i * 0.15}
                />
              </p>
              <p className="text-orange-500 dark:text-orange-400 text-sm font-semibold">
                {s.label}
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed mt-1">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
