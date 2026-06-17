import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso — Lucro Real',
  description: 'Leia os Termos de Uso do aplicativo Lucro Real antes de utilizar o serviço.',
};

export default function TermsPage() {
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
          Termos de Uso
        </h1>
        <p className="text-sm text-zinc-400 mb-12">Última atualização: 17 de junho de 2026</p>

        <div className="space-y-10 text-zinc-600 dark:text-zinc-400 leading-relaxed">

          <Section title="1. Aceitação dos Termos">
            <p>
              Ao criar uma conta ou utilizar o aplicativo Lucro Real, você concorda com estes
              Termos de Uso. Se não concordar com alguma disposição, não utilize o aplicativo.
            </p>
            <p>
              Estes termos constituem um contrato legal entre você (<strong>Usuário</strong>) e o
              desenvolvedor do Lucro Real (<strong>nós</strong>).
            </p>
          </Section>

          <Section title="2. Descrição do Serviço">
            <p>O Lucro Real é um aplicativo para motoristas autônomos que auxilia no controle financeiro de corridas, incluindo:</p>
            <ul>
              <li>Registro de corridas e turnos de trabalho;</li>
              <li>Rastreamento de distância por GPS;</li>
              <li>Cálculo de lucro líquido por corrida;</li>
              <li>Controle de gastos com combustível e manutenção;</li>
              <li>Relatórios de desempenho financeiro;</li>
              <li>Integração com plataformas de entrega.</li>
            </ul>
          </Section>

          <Section title="3. Cadastro e Conta">
            <p>Para usar o Lucro Real, você deve:</p>
            <ul>
              <li>Ter 18 anos ou mais;</li>
              <li>Fornecer informações verdadeiras e atualizadas;</li>
              <li>Manter a confidencialidade da sua senha;</li>
              <li>Notificar imediatamente qualquer uso não autorizado da sua conta.</li>
            </ul>
            <p>Você é responsável por todas as atividades realizadas na sua conta.</p>
          </Section>

          <Section title="4. Assinatura e Pagamento">
            <p>
              <strong>Plano gratuito com período de teste:</strong> ao se cadastrar, você tem
              acesso completo ao aplicativo por um período de avaliação gratuita.
            </p>
            <p>
              <strong>Plano pago:</strong> após o período de teste, é necessária uma assinatura
              mensal para continuar usando o serviço. O valor e as condições são exibidos na tela
              de assinatura do aplicativo.
            </p>
            <p>
              <strong>Renovação automática:</strong> a assinatura é renovada automaticamente a
              cada período. Você pode cancelar a qualquer momento pelo portal de gerenciamento de
              assinatura, acessível no perfil do aplicativo.
            </p>
            <p>
              <strong>Reembolsos:</strong> avaliamos pedidos de reembolso caso a caso. Entre em
              contato pelo WhatsApp (11) 98656-0132.
            </p>
            <p>
              Os pagamentos são processados com segurança pelo Stripe, sem que armazenemos dados
              do seu cartão.
            </p>
          </Section>

          <Section title="5. Uso Permitido">
            <p>
              Você concorda em utilizar o Lucro Real exclusivamente para fins legítimos de controle
              financeiro pessoal. É proibido:
            </p>
            <ul>
              <li>Usar o aplicativo para fins ilegais ou fraudulentos;</li>
              <li>Tentar acessar dados de outros usuários;</li>
              <li>Realizar engenharia reversa do aplicativo;</li>
              <li>Compartilhar suas credenciais de acesso com terceiros;</li>
              <li>Sobrecarregar intencionalmente os servidores do serviço.</li>
            </ul>
          </Section>

          <Section title="6. Propriedade Intelectual">
            <p>
              Todo o conteúdo do aplicativo — incluindo código-fonte, design, logotipos, textos e
              funcionalidades — é de propriedade exclusiva do Lucro Real e está protegido por leis
              de propriedade intelectual.
            </p>
            <p>Os dados inseridos por você (registros de corridas, fotos etc.) permanecem de sua propriedade.</p>
          </Section>

          <Section title="7. Limitação de Responsabilidade">
            <p>
              O Lucro Real fornece cálculos estimados baseados nos dados inseridos pelo usuário. Os
              valores apresentados são <strong>meramente indicativos</strong> e não substituem a
              orientação de um contador ou profissional financeiro.
            </p>
            <p>Não nos responsabilizamos por:</p>
            <ul>
              <li>Decisões financeiras tomadas com base nos dados do aplicativo;</li>
              <li>Imprecisões no cálculo de distâncias por limitações do GPS;</li>
              <li>Indisponibilidade temporária do serviço por manutenção ou falhas técnicas;</li>
              <li>Perda de dados por falha no dispositivo do usuário.</li>
            </ul>
          </Section>

          <Section title="8. Disponibilidade do Serviço">
            <p>
              Nos esforçamos para manter o serviço disponível 24 horas por dia, mas não garantimos
              disponibilidade ininterrupta. Podemos realizar manutenções programadas com aviso
              prévio sempre que possível.
            </p>
          </Section>

          <Section title="9. Encerramento de Conta">
            <p>Você pode solicitar o encerramento da sua conta a qualquer momento pelo suporte. Ao encerrar:</p>
            <ul>
              <li>Sua assinatura será cancelada;</li>
              <li>Seus dados pessoais serão excluídos em até 30 dias;</li>
              <li>Os dados de corridas poderão ser mantidos de forma anonimizada para análise estatística.</li>
            </ul>
            <p>
              Podemos suspender ou encerrar sua conta em caso de violação destes termos, sem aviso
              prévio.
            </p>
          </Section>

          <Section title="10. Alterações nos Termos">
            <p>
              Podemos atualizar estes Termos de Uso a qualquer momento. Notificaremos você por
              meio do aplicativo sobre mudanças relevantes. O uso continuado após a notificação
              constitui aceite dos novos termos.
            </p>
          </Section>

          <Section title="11. Lei Aplicável">
            <p>
              Estes Termos de Uso são regidos pelas leis brasileiras. Eventuais disputas serão
              resolvidas no foro da comarca de São Paulo – SP, com renúncia a qualquer outro, por
              mais privilegiado que seja.
            </p>
          </Section>

          <Section title="12. Contato">
            <p>Dúvidas sobre estes Termos de Uso:</p>
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
