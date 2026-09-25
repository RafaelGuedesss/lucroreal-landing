import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Excluir Conta — Lucro Real',
  description: 'Como excluir sua conta no Lucro Real e quais dados são apagados.',
};

export default function ExclusaoDeContaPage() {
  return (
    <div style={{ background: 'var(--section-a)' }} className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-orange-500 transition-colors mb-10 group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          Voltar para o início
        </Link>

        <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
          Excluir Conta
        </h1>
        <p className="text-sm text-zinc-400 mb-12">Última atualização: 25 de setembro de 2026</p>

        <div className="space-y-10 text-zinc-600 dark:text-zinc-400 leading-relaxed">

          <p>
            O Lucro Real é um aplicativo para motoristas de app acompanharem corridas, custos e
            lucro. Esta página explica como excluir sua conta e quais dados são apagados nesse
            processo.
          </p>

          <Section title="Como excluir sua conta">
            <ol className="list-decimal ml-5 space-y-1.5">
              <li>Abra o app Lucro Real e faça login normalmente.</li>
              <li>
                Se tiver uma assinatura ativa, cancele-a primeiro em Perfil → Assinatura — excluir
                a conta não cancela cobranças automaticamente.
              </li>
              <li>Finalize qualquer turno em andamento.</li>
              <li>Vá em Perfil → Excluir Minha Conta e confirme.</li>
            </ol>
            <p className="mt-3 font-semibold text-zinc-800 dark:text-zinc-200">
              A exclusão é imediata e permanente — não pode ser desfeita.
            </p>
          </Section>

          <Section title="Não tem mais acesso ao app?">
            <p>
              Entre em contato pelo WhatsApp ou e-mail abaixo pedindo a exclusão da sua conta.
              Vamos confirmar sua identidade (pelo e-mail cadastrado) e excluir manualmente em até
              5 dias úteis.
            </p>
          </Section>

          <Section title="O que é apagado">
            <p><strong>Removido imediatamente:</strong> nome, e-mail, telefone, foto de perfil, dados do
              veículo, todas as corridas registradas, todos os abastecimentos registrados, todos os
              itens e registros de Manutenção &amp; Despesas, e a conta de login em si.</p>
            <p><strong>Mantido — antifraude:</strong> um identificador do aparelho (sem vínculo com seu
              nome ou e-mail depois da exclusão) continua registrado, só pra impedir que o mesmo
              aparelho ative o período de teste gratuito de novo com outra conta.</p>
            <p><strong>Mantido — obrigação legal do processador de pagamento:</strong> registros de
              cobrança mantidos pelo Stripe (nosso processador de pagamento) pelo prazo exigido por
              obrigações fiscais — não é controlado por nós, segue a política de retenção do próprio
              Stripe.</p>
          </Section>

          <Section title="Contato">
            <p>Dúvidas sobre exclusão de conta ou dados:</p>
            <ul>
              <li><strong>WhatsApp:</strong> (11) 98656-0132</li>
              <li>
                <strong>E-mail:</strong>{' '}
                <a href="mailto:rafael.guedess@gmail.com" className="text-orange-500 hover:underline">
                  rafael.guedess@gmail.com
                </a>
              </li>
            </ul>
          </Section>

        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4">{title}</h2>
      <div className="space-y-3 [&_ul]:mt-2 [&_ul]:ml-5 [&_ul]:space-y-1.5 [&_ul]:list-disc [&_strong]:text-zinc-800 dark:[&_strong]:text-zinc-200 [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}
