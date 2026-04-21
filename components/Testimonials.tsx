'use client';

import { motion } from 'framer-motion';
import { Star } from '@phosphor-icons/react';

const testimonials = [
  {
    name: 'Diego Souza',
    role: 'Motorista Uber',
    city: 'São Paulo',
    seed: 'driver-sp-01',
    text: 'Antes eu achava que estava ganhando bem. Depois do Lucro Real vi que meu lucro real era quase metade do bruto. Ajustei meus horários e aumentei o lucro em 35%.',
  },
  {
    name: 'Marcos Ferreira',
    role: 'Freteiro',
    city: 'Belo Horizonte',
    seed: 'trucker-bh-02',
    text: 'Faço frete de caminhão e nunca soube calcular direito o custo do combustível por viagem. Agora sei exatamente o que aceito ou recuso. Virou minha bíblia.',
  },
  {
    name: 'Priscila Alves',
    role: 'Entregadora iFood',
    city: 'Curitiba',
    seed: 'delivery-ctb-03',
    text: 'Tenho meta de R$ 250 por dia e o app me mostra em tempo real se vou bater. Quando vejo que tô atrasada, sei que preciso pegar mais pedidos. Simples e incrível.',
  },
  {
    name: 'Rodrigo Lima',
    role: 'Motorista 99 e Uber',
    city: 'Rio de Janeiro',
    seed: 'driver-rj-04',
    text: 'O histórico completo me ajudou a descobrir que segunda-feira de manhã era meu pior turno. Mudei a grade e meu mês melhorou mais de R$ 500.',
  },
  {
    name: 'Carla Mendes',
    role: 'Motorista de app',
    city: 'Recife',
    seed: 'driver-rec-05',
    text: 'Tentei usar planilha por meses e desisti. O Lucro Real é tão simples que uso todo dia sem nem pensar. Registrar corrida leva 10 segundos.',
  },
  {
    name: 'André Costa',
    role: 'Mototaxista',
    city: 'Fortaleza',
    seed: 'moto-for-06',
    text: 'Descobri que quando o combustível sobe, meu lucro cai mais do que eu imaginava. Hoje ajusto o preço das minhas corridas particulares com base nos dados do app.',
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="w-[340px] shrink-0 p-5 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-100 dark:border-white/5 flex flex-col gap-4 mx-2.5 shadow-sm dark:shadow-none">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} weight="fill" size={12} className="text-orange-400" />
        ))}
      </div>
      <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed flex-1">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-1 border-t border-zinc-100 dark:border-white/5">
        <img
          src={`https://picsum.photos/seed/${t.seed}/80/80`}
          alt={t.name}
          className="w-9 h-9 rounded-full object-cover bg-zinc-100 dark:bg-zinc-800"
          width={36}
          height={36}
        />
        <div>
          <p className="text-zinc-900 dark:text-zinc-100 font-semibold text-[13px]">{t.name}</p>
          <p className="text-zinc-400 dark:text-zinc-500 text-xs">
            {t.role} — {t.city}
          </p>
        </div>
      </div>
    </div>
  );
}

const doubled = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 overflow-hidden"
      style={{ background: 'var(--section-b)' }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-orange-500 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Depoimentos
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-4 leading-[1.05]">
            Motoristas que pararam de
            <br />
            <span className="text-zinc-400 dark:text-zinc-500">trabalhar no prejuízo</span>
          </h2>
          <p className="text-zinc-500 text-lg">
            Mais de 2.000 motoristas profissionais já descobriram quanto realmente ganham.
          </p>
        </motion.div>
      </div>

      {/* Row 1: left to right */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--section-b), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--section-b), transparent)' }} />
        <motion.div
          className="flex"
          style={{ width: 'max-content' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Row 2: right to left */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--section-b), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--section-b), transparent)' }} />
        <motion.div
          className="flex"
          style={{ width: 'max-content' }}
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
