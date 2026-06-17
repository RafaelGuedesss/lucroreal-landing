import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade — Lucro Real',
  description: 'Saiba como o Lucro Real coleta, usa e protege seus dados pessoais.',
};

export default function PrivacyPage() {
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
          Política de Privacidade
        </h1>
        <p className="text-sm text-zinc-400 mb-12">Última atualização: 17 de junho de 2026</p>

        <div className="space-y-10 text-zinc-600 dark:text-zinc-400 leading-relaxed">

          <Section title="1. Informações que Coletamos">
            <p>O aplicativo Lucro Real coleta as seguintes informações para o funcionamento do serviço:</p>
            <ul>
              <li><strong>Dados de cadastro:</strong> nome completo, CPF, número de celular e e-mail, fornecidos voluntariamente durante o cadastro.</li>
              <li><strong>Dados do veículo:</strong> placa, marca, modelo, tipo de combustível e consumo médio (km/L ou custo/km para elétricos).</li>
              <li><strong>Dados de localização:</strong> coordenadas GPS para calcular a distância percorrida durante as corridas. A localização é coletada somente enquanto o turno está ativo e pode ser coletada em segundo plano quando o turno estiver em andamento.</li>
              <li><strong>Dados financeiros das corridas:</strong> valor recebido, distância percorrida, gasto com combustível e outras despesas registradas manualmente pelo usuário.</li>
              <li><strong>Fotos:</strong> foto de perfil e foto do veículo enviadas opcionalmente pelo usuário.</li>
            </ul>
          </Section>

          <Section title="2. Como Usamos Suas Informações">
            <p>Utilizamos as informações coletadas para:</p>
            <ul>
              <li>Calcular o lucro líquido por corrida e por turno;</li>
              <li>Gerar relatórios de desempenho e gastos;</li>
              <li>Autenticar o usuário e manter a sessão ativa;</li>
              <li>Gerenciar a assinatura do plano (via Stripe);</li>
              <li>Oferecer suporte técnico;</li>
              <li>Melhorar as funcionalidades do aplicativo.</li>
            </ul>
          </Section>

          <Section title="3. Compartilhamento de Dados">
            <p>
              Não vendemos nem alugamos seus dados pessoais a terceiros. Compartilhamos
              informações apenas com:
            </p>
            <ul>
              <li>
                <strong>Supabase:</strong> plataforma de banco de dados e autenticação utilizada
                para armazenar seus dados com segurança.
              </li>
              <li>
                <strong>Stripe:</strong> processador de pagamentos responsável pela cobrança da
                assinatura. O Stripe possui certificação PCI-DSS e não armazenamos dados de cartão
                de crédito.
              </li>
            </ul>
            <p>Podemos compartilhar dados quando exigido por lei ou para cumprir ordens judiciais.</p>
          </Section>

          <Section title="4. Armazenamento e Segurança">
            <p>
              Seus dados são armazenados em servidores seguros da Supabase, protegidos por
              criptografia em trânsito (TLS/HTTPS) e em repouso. Fotos de perfil e de veículos são
              armazenadas no Supabase Storage com acesso restrito.
            </p>
            <p>
              Tomamos medidas técnicas e organizacionais para proteger suas informações contra
              acesso não autorizado, perda ou alteração.
            </p>
          </Section>

          <Section title="5. Localização GPS">
            <p>
              A coleta de localização é realizada exclusivamente para calcular a distância
              percorrida durante as corridas. Você pode encerrar o rastreamento a qualquer momento
              finalizando o turno. O aplicativo pode solicitar permissão de localização em segundo
              plano (background) para garantir a precisão do cálculo mesmo quando a tela está
              bloqueada.
            </p>
            <p>
              As coordenadas GPS <strong>não são compartilhadas</strong> com terceiros e são usadas
              apenas internamente para o cálculo de distância.
            </p>
          </Section>

          <Section title="6. Retenção de Dados">
            <p>
              Seus dados são mantidos enquanto você tiver uma conta ativa no Lucro Real. Caso
              solicite a exclusão da conta, removeremos seus dados pessoais em até 30 dias, salvo
              obrigação legal de retenção.
            </p>
          </Section>

          <Section title="7. Seus Direitos (LGPD)">
            <p>
              Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
            </p>
            <ul>
              <li>Confirmar a existência de tratamento de dados;</li>
              <li>Acessar seus dados;</li>
              <li>Corrigir dados incompletos ou inexatos;</li>
              <li>Solicitar a exclusão dos dados;</li>
              <li>Revogar o consentimento a qualquer momento;</li>
              <li>Portabilidade dos dados.</li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato pelo e-mail:{' '}
              <a href="mailto:rafael.guedess@gmail.com" className="text-orange-500 hover:underline">
                rafael.guedess@gmail.com
              </a>
            </p>
          </Section>

          <Section title="8. Crianças">
            <p>
              O Lucro Real é destinado a motoristas profissionais adultos. Não coletamos
              intencionalmente informações de menores de 18 anos.
            </p>
          </Section>

          <Section title="9. Alterações desta Política">
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Quando houver
              alterações significativas, notificaremos você pelo aplicativo. O uso continuado do
              serviço após a notificação constitui aceite das mudanças.
            </p>
          </Section>

          <Section title="10. Contato">
            <p>Em caso de dúvidas sobre esta Política de Privacidade, entre em contato:</p>
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
