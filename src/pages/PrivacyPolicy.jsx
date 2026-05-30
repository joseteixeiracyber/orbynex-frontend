import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <main className="bg-[#0A0F1C] text-white min-h-screen">
        <section className="max-w-5xl mx-auto px-6 py-32">
          <h1 className="text-5xl font-bold mb-6">
            Política de Privacidade
          </h1>

          <p className="text-gray-400 mb-12">
            Última atualização: Maio de 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Introdução
              </h2>

              <p>
                A Orbynex Tecnologia possui o compromisso de proteger
                a privacidade, segurança e confidencialidade das
                informações de seus usuários, clientes, parceiros e
                colaboradores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Dados Coletados
              </h2>

              <p>
                Podemos coletar informações cadastrais, empresariais,
                financeiras, operacionais e técnicas necessárias para
                execução dos serviços oferecidos pela plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Dados Financeiros e Open Finance
              </h2>

              <p>
                Mediante autorização do usuário, a Orbynex poderá
                acessar dados financeiros através de integrações
                autorizadas de Open Finance, Open Insurance e
                instituições parceiras regulamentadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Finalidade do Tratamento
              </h2>

              <p>
                Os dados poderão ser utilizados para gestão
                empresarial, automação, inteligência artificial,
                relatórios analíticos, integrações financeiras,
                atendimento ao cliente, prevenção a fraudes,
                segurança e melhoria contínua dos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Compartilhamento de Dados
              </h2>

              <p>
                A Orbynex não comercializa informações pessoais.
                O compartilhamento somente ocorrerá mediante
                consentimento, obrigação legal ou necessidade
                operacional para execução dos serviços contratados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Segurança da Informação
              </h2>

              <p>
                Utilizamos criptografia avançada, ambientes
                protegidos, autenticação segura, monitoramento
                contínuo, segregação de acesso, backups protegidos e
                práticas modernas de cibersegurança para proteger os
                dados armazenados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Inteligência Artificial
              </h2>

              <p>
                Algumas funcionalidades poderão utilizar recursos de
                Inteligência Artificial para análise, automação e
                geração de insights, respeitando os mesmos padrões de
                privacidade e proteção definidos nesta política.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Direitos do Usuário
              </h2>

              <p>
                O titular poderá solicitar acesso, correção,
                exclusão, portabilidade, anonimização e revogação de
                consentimento nos termos da LGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                9. Retenção de Dados
              </h2>

              <p>
                Os dados serão armazenados pelo período necessário
                para cumprimento de obrigações legais, execução dos
                serviços e proteção dos interesses legítimos da
                Orbynex.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                10. Alterações
              </h2>

              <p>
                Esta política poderá ser atualizada periodicamente.
                A versão mais recente estará sempre disponível em
                nossos canais oficiais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                11. Contato
              </h2>

              <p>
                Dúvidas relacionadas à privacidade podem ser
                encaminhadas para:
              </p>

              <p className="mt-4 text-[#00E5FF]">
                privacidade@orbynex.com.br
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}