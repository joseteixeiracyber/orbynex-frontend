import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsOfUse() {
  return (
    <>
      <Header />

      <main className="bg-[#0A0F1C] text-white min-h-screen">
        <section className="max-w-5xl mx-auto px-6 py-32">
          <h1 className="text-5xl font-bold mb-6">
            Termos de Uso
          </h1>

          <p className="text-gray-400 mb-12">
            Última atualização: Maio de 2026
          </p>

          <div className="space-y-10 text-gray-300 leading-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Aceitação
              </h2>

              <p>
                Ao utilizar qualquer serviço, plataforma ou solução
                disponibilizada pela Orbynex, o usuário declara estar
                ciente e concordar integralmente com estes Termos de
                Uso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Serviços Prestados
              </h2>

              <p>
                A Orbynex disponibiliza soluções de gestão,
                automação, inteligência artificial, integração
                empresarial, Open Finance, análise de dados,
                relacionamento com clientes e serviços digitais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Cadastro
              </h2>

              <p>
                O usuário é responsável pela veracidade das
                informações fornecidas e pela segurança de suas
                credenciais de acesso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Segurança de Acesso
              </h2>

              <p>
                É responsabilidade do usuário manter senhas, tokens,
                dispositivos e métodos de autenticação protegidos
                contra acessos não autorizados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Propriedade Intelectual
              </h2>

              <p>
                Todos os direitos relacionados à plataforma,
                tecnologia, marca, design, sistemas, algoritmos,
                inteligência artificial e demais ativos pertencem
                exclusivamente à Orbynex.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Uso Permitido
              </h2>

              <p>
                É proibido utilizar a plataforma para atividades
                ilícitas, engenharia reversa, invasões, distribuição
                de malware, fraude ou qualquer prática que possa
                comprometer a segurança dos sistemas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Confidencialidade
              </h2>

              <p>
                Informações estratégicas, corporativas, financeiras e
                operacionais acessadas através da plataforma deverão
                ser tratadas como confidenciais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Open Finance
              </h2>

              <p>
                Compartilhamentos financeiros somente ocorrerão
                mediante autorização expressa do titular, seguindo os
                padrões regulatórios e de segurança aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                9. Limitação de Responsabilidade
              </h2>

              <p>
                Embora a Orbynex adote elevados padrões de
                disponibilidade e segurança, não poderá ser
                responsabilizada por eventos decorrentes de falhas de
                terceiros, força maior ou indisponibilidades externas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                10. Suspensão e Encerramento
              </h2>

              <p>
                Contas que violem estes Termos ou representem risco à
                plataforma poderão ser suspensas ou encerradas a
                qualquer momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                11. Legislação Aplicável
              </h2>

              <p>
                Estes Termos são regidos pelas leis da República
                Federativa do Brasil, incluindo a LGPD e o Marco
                Civil da Internet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                12. Foro
              </h2>

              <p>
                Fica eleito o foro da comarca da sede da Orbynex para
                dirimir quaisquer controvérsias decorrentes destes
                Termos.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}