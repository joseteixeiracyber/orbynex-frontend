import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Building2,
  BarChart3,
  Users,
  Wallet,
  MessageSquareText,
  Workflow,
  BrainCircuit,
  ShieldCheck,
  Plug,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function BusinessSolutions() {
  const cards = [
    {
      icon: <BarChart3 size={30} />,
      title: "Gestão Comercial",
      text: "Controle vendas, oportunidades, funil comercial e desempenho da equipe em tempo real.",
    },
    {
      icon: <MessageSquareText size={30} />,
      title: "Atendimento ao Cliente",
      text: "Centralize conversas, histórico, solicitações e relacionamento com seus clientes.",
    },
    {
      icon: <Wallet size={30} />,
      title: "Financeiro Empresarial",
      text: "Organize receitas, despesas, cobranças, indicadores e integrações financeiras.",
    },
    {
      icon: <Workflow size={30} />,
      title: "Automação de Processos",
      text: "Reduza tarefas repetitivas e acelere rotinas operacionais com fluxos inteligentes.",
    },
    {
      icon: <BrainCircuit size={30} />,
      title: "IA para Empresas",
      text: "Use inteligência artificial para gerar insights, automatizar análises e apoiar decisões.",
    },
    {
      icon: <Plug size={30} />,
      title: "Integrações",
      text: "Conecte sistemas, APIs, bancos, ERPs, CRMs, WhatsApp e ferramentas externas.",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#0A0F1C] text-white overflow-hidden">
        <section className="relative px-6 lg:px-16 pt-36 pb-24">
          <div className="absolute top-0 left-[-120px] w-[420px] h-[420px] bg-[#2563EB]/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-[-120px] w-[520px] h-[520px] bg-[#7C3AED]/20 blur-[140px] rounded-full" />

          <div className="relative max-w-7xl mx-auto">
            <span className="inline-block bg-white/5 border border-white/10 px-5 py-2 rounded-full text-sm text-[#00E5FF]">
              SOLUÇÕES PARA EMPRESAS
            </span>

            <h1 className="mt-8 max-w-5xl text-5xl lg:text-7xl font-bold leading-tight">
              Tecnologia para empresas que querem vender, crescer e operar com{" "}
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] bg-clip-text text-transparent">
                inteligência.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-gray-300 leading-8">
              A Orbynex conecta vendas, atendimento, financeiro, automações,
              dados e inteligência artificial em uma única plataforma para
              empresas de todos os tamanhos.
            </p>

            <a
              href="/contato"
              className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Falar com especialista
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((item, index) => (
              <div
                key={index}
                className="bg-[#111827]/60 border border-white/10 rounded-3xl p-8 hover:border-[#7C3AED]/40 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 flex items-center justify-center text-[#00E5FF] mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

                <p className="text-gray-400 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00E5FF] text-sm tracking-widest">
                PARA TODO TIPO DE NEGÓCIO
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                Da pequena empresa ao grande grupo corporativo.
              </h2>

              <p className="mt-6 text-gray-400 leading-8 text-lg">
                A Orbynex foi criada para acompanhar empresas em qualquer fase:
                comércios, prestadores de serviço, operações digitais,
                franquias, equipes comerciais, empresas locais e grandes
                organizações.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Controle completo de clientes e oportunidades",
                "Gestão de vendas e funil comercial",
                "Atendimento integrado e organizado",
                "Financeiro conectado com dados reais",
                "Automação de tarefas operacionais",
                "Relatórios estratégicos para tomada de decisão",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
                >
                  <CheckCircle2 className="text-[#00E5FF]" size={20} />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-24 bg-[#070B14] border-y border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <span className="text-[#00E5FF] text-sm tracking-widest">
                ECOSSISTEMA EMPRESARIAL
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                Uma base única para conectar áreas, pessoas e resultados.
              </h2>

              <p className="mt-6 text-gray-400 leading-8 text-lg">
                Em vez de usar várias ferramentas isoladas, a Orbynex centraliza
                informações e transforma dados em visão estratégica para o
                crescimento da empresa.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Vendas",
                "Atendimento",
                "Financeiro",
                "Operações",
                "Equipe",
                "Clientes",
                "Dados",
                "Automação",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#111827]/70 border border-white/10 rounded-3xl p-7"
                >
                  <Building2 className="text-[#00E5FF] mb-5" size={30} />
                  <h3 className="text-2xl font-semibold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 border border-white/10 rounded-[2rem] p-10 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Sua empresa mais conectada, segura e preparada para crescer.
                </h2>

                <p className="mt-6 text-gray-300 text-lg leading-8">
                  A Orbynex entrega uma estrutura moderna para empresas que
                  querem profissionalizar processos, melhorar resultados e
                  tomar decisões com mais inteligência.
                </p>
              </div>

              <div className="bg-[#0A0F1C]/70 border border-white/10 rounded-3xl p-8">
                <ShieldCheck className="text-[#00E5FF] mb-6" size={38} />

                <h3 className="text-2xl font-semibold mb-5">
                  Segurança empresarial
                </h3>

                <div className="space-y-4 text-gray-300">
                  {[
                    "Dados protegidos por criptografia",
                    "Controle de acesso por perfil",
                    "Ambiente preparado para informações sigilosas",
                    "Base para integrações financeiras e operacionais",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-[#00E5FF] mt-1" size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/contato"
              className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Solicitar demonstração
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}