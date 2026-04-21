'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from '@phosphor-icons/react';

const faqs = [
  {
    q: 'Funciona para Uber, 99, InDriver e outros apps?',
    a: 'Sim. O Lucro Real funciona com qualquer app de transporte ou entrega. Você registra o valor recebido de qualquer fonte e o app calcula o lucro líquido descontando combustível e km.',
  },
  {
    q: 'Como o app calcula o custo de combustível?',
    a: 'Você informa a média do seu veículo (km/l) e o preço do combustível. A cada corrida, o app calcula automaticamente o quanto gastou com base nos km rodados. Quando você abastece, os valores são atualizados.',
  },
  {
    q: 'Preciso deixar o GPS ligado o tempo todo?',
    a: 'Não é obrigatório. O GPS é usado para calcular a quilometragem rodada automaticamente, mas você também pode inserir o km manualmente se preferir economizar bateria.',
  },
  {
    q: 'Meus dados ficam seguros?',
    a: 'Sim. Usamos Supabase com criptografia e servidores seguros. Seus dados são privados e nunca são compartilhados com terceiros, incluindo os apps de transporte.',
  },
  {
    q: 'O que acontece depois dos 30 dias grátis?',
    a: 'Você receberá um lembrete e poderá escolher assinar por R$ 29,90/mês para continuar usando. Se não assinar, o acesso será suspenso — sem cobranças automáticas.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Sim, a qualquer momento pelo próprio app, sem burocracia. Sem multa, sem fidelidade.',
  },
];

function FAQItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-zinc-100 dark:border-white/5"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.055 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-zinc-800 dark:text-zinc-200 font-medium text-sm group-hover:text-zinc-900 dark:group-hover:text-white transition-colors leading-snug">
          {item.q}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200 dark:border-white/5 flex items-center justify-center text-zinc-400 dark:text-zinc-500">
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-zinc-500 text-sm leading-relaxed max-w-[62ch]">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 px-6"
      style={{ background: 'var(--section-b)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_8fr] gap-12 lg:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-orange-500 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 mb-4 leading-[1.05]">
              Perguntas
              <br />
              frequentes
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed max-w-[32ch]">
              Tem outra dúvida? Fale com a gente diretamente pelo WhatsApp.
            </p>
          </motion.div>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} item={faq} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
