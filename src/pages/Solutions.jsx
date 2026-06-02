import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Building2,
  Users,
  BrainCircuit,
  Wallet,
  Workflow,
  Plug,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: <Building2 size={32} />,
      title: "Gestão Empresarial",
      description:
        "CRM, vendas, financeiro, atendimento, produtividade e operações em uma única plataforma.",
    },
    {
      icon: <Users size={32} />,
      title: "Pessoas e Profissionais",
      description:
        "Organização financeira, agenda, produtividade, gestão de clientes e crescimento pessoal.",
    },
    {
      icon: <BrainCircuit size={32} />,
      title: "Inteligência Artificial",
      description:
        "Automações inteligentes, análise de dados, geração de insights e aumento de produtividade.",
    },
    {
      icon: <Wallet size={32} />,
      title: "Open Finance",
      description:
        "Conecte instituições financeiras, contas bancárias, movimentações e indicadores em um só lugar.",
    },
    {
      icon: <Workflow size={32} />,
      title: "Automação",
      description:
        "Fluxos automatizados para reduzir tarefas repetitivas e acelerar resultados.",
    },
    {
      icon: <Plug size={32} />,
      title: "Integrações",
      description:
        "Conecte ERPs, CRMs, WhatsApp, APIs, bancos e sistemas externos com facilidade.",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#0A0F1C] text-white overflow-hidden">
        {/* HERO */}
        <section className="relative px-6 lg:px-16 pt-36 pb-24">
          <div className="absolute top-0 left-[-100px] w-[400px] h-[400px] bg-[#2563EB]/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-[-100px] w-[500px] h-[500px] bg-[#7C3AED]/20 blur-[120px] rounded-full" />

          <div className="relative max-w-7xl mx-auto">
            <span className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[#00E5FF] text-sm">
              SOLUÇÕES ORBYNEX
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold max-w-5xl leading-tight">
              Um ecossistema completo para conectar tudo o que importa.
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-gray-300 leading-8">
              A Orbynex reúne gestão, vendas, automação, Open Finance,
              inteligência artificial e produtividade em uma única plataforma.
            </p>
          </div>
        </section>

        {/* CARDS */}
        <section className="px-6 lg:px-16 py-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="bg-[#111827]/60 border border-white/10 rounded-3xl p-8 hover:border-[#7C3AED]/40 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 flex items-center justify-center text-[#00E5FF] mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ECOSSISTEMA */}
        <section className="px-6 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#00E5FF] text-sm tracking-widest">
                ECOSSISTEMA ORBYNEX
              </span>

              <h2 className="mt-4 text-5xl font-bold">
                Tudo conectado em um único ambiente.
              </h2>

              <p className="mt-8 text-gray-400 leading-8 text-lg">
                Nossa missão é eliminar a necessidade de múltiplas
                ferramentas desconectadas. A Orbynex centraliza
                processos, pessoas, vendas, finanças, dados e IA.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "CRM e Gestão Comercial",
                "Atendimento Omnichannel",
                "Open Finance",
                "Controle Financeiro",
                "Automação de Processos",
                "Gestão de Equipes",
                "Relatórios Inteligentes",
                "Inteligência Artificial",
                "Integrações via API",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#00E5FF]"
                  />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 border border-white/10 rounded-[2rem] p-10 lg:p-16">
            <div className="max-w-3xl">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                Pronto para transformar sua operação?
              </h2>

              <p className="mt-6 text-gray-300 text-lg leading-8">
                Descubra como a Orbynex pode conectar pessoas,
                empresas, vendas, dados e inteligência em uma única
                plataforma.
              </p>

              <a
                href="/contato"
                className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Falar com especialista
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}