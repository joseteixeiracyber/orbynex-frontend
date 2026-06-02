import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Store,
  Stethoscope,
  GraduationCap,
  Home,
  Scissors,
  Utensils,
  Truck,
  BriefcaseBusiness,
  Landmark,
  ShoppingBag,
  Building2,
  BrainCircuit,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function SegmentSolutions() {
  const segments = [
    {
      icon: <Store size={30} />,
      title: "Comércio e varejo",
      text: "Controle vendas, clientes, estoque, atendimento, financeiro e campanhas em um só lugar.",
    },
    {
      icon: <ShoppingBag size={30} />,
      title: "E-commerce",
      text: "Conecte pedidos, clientes, canais digitais, automações e indicadores de performance.",
    },
    {
      icon: <Scissors size={30} />,
      title: "Beleza e estética",
      text: "Organize agenda, clientes, serviços, pagamentos, recorrência e relacionamento.",
    },
    {
      icon: <Stethoscope size={30} />,
      title: "Saúde e clínicas",
      text: "Gerencie atendimento, agenda, pacientes, documentos, financeiro e processos internos.",
    },
    {
      icon: <Utensils size={30} />,
      title: "Alimentação",
      text: "Acompanhe pedidos, vendas, clientes, fornecedores, atendimento e rotinas operacionais.",
    },
    {
      icon: <GraduationCap size={30} />,
      title: "Educação",
      text: "Centralize alunos, matrículas, comunicação, financeiro, relatórios e produtividade.",
    },
    {
      icon: <Truck size={30} />,
      title: "Logística e entregas",
      text: "Organize operações, clientes, rotas, cobranças, indicadores e acompanhamento.",
    },
    {
      icon: <Home size={30} />,
      title: "Imobiliário",
      text: "Controle leads, imóveis, clientes, visitas, propostas, contratos e relacionamento.",
    },
    {
      icon: <BriefcaseBusiness size={30} />,
      title: "Serviços profissionais",
      text: "Ideal para consultores, agências, contadores, advogados e prestadores de serviço.",
    },
    {
      icon: <Landmark size={30} />,
      title: "Financeiro e seguros",
      text: "Base para Open Finance, Open Insurance, integrações seguras e análise de dados.",
    },
    {
      icon: <Building2 size={30} />,
      title: "Empresas e grupos",
      text: "Estruture áreas, equipes, vendas, atendimento, dados, automações e gestão empresarial.",
    },
    {
      icon: <BrainCircuit size={30} />,
      title: "Operações digitais",
      text: "Automatize processos, conecte APIs, centralize dados e use IA para ganhar escala.",
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
              SOLUÇÕES POR SEGMENTO
            </span>

            <h1 className="mt-8 max-w-5xl text-5xl lg:text-7xl font-bold leading-tight">
              A Orbynex se adapta ao seu mercado, operação e forma de crescer.
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-gray-300 leading-8">
              Do comércio local às grandes operações digitais, a Orbynex conecta
              vendas, atendimento, financeiro, automações, dados e inteligência
              em uma única plataforma.
            </p>

            <a
              href="/contato"
              className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Encontrar solução ideal
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {segments.map((item, index) => (
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
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00E5FF] text-sm tracking-widest">
                FLEXÍVEL PARA QUALQUER OPERAÇÃO
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                Cada segmento tem desafios diferentes. A Orbynex conecta todos.
              </h2>

              <p className="mt-6 text-gray-400 leading-8 text-lg">
                A plataforma foi pensada para acompanhar diferentes modelos de
                negócio, permitindo configurar processos, organizar dados,
                automatizar rotinas e melhorar decisões conforme a realidade de
                cada mercado.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Gestão de clientes e relacionamento",
                "Vendas, pedidos e oportunidades",
                "Atendimento integrado",
                "Financeiro e cobranças",
                "Automação de processos",
                "Relatórios e indicadores por segmento",
                "IA aplicada à rotina operacional",
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
            <span className="text-[#00E5FF] text-sm tracking-widest">
              UM ECOSSISTEMA PARA TODOS
            </span>

            <h2 className="mt-4 max-w-4xl text-4xl lg:text-5xl font-bold leading-tight">
              Pequenos negócios, profissionais, empresas e grupos conectados em
              uma mesma visão.
            </h2>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Vendas",
                "Clientes",
                "Equipe",
                "Financeiro",
                "Agenda",
                "Atendimento",
                "Dados",
                "Automações",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#111827]/70 border border-white/10 rounded-3xl p-7"
                >
                  <CheckCircle2 className="text-[#00E5FF] mb-5" size={30} />
                  <h3 className="text-xl font-semibold">{item}</h3>
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
                  Uma plataforma preparada para o seu segmento.
                </h2>

                <p className="mt-6 text-gray-300 text-lg leading-8">
                  Seja qual for seu mercado, a Orbynex ajuda a conectar pessoas,
                  processos, dados e tecnologia para gerar mais controle,
                  produtividade e crescimento.
                </p>
              </div>

              <div className="bg-[#0A0F1C]/70 border border-white/10 rounded-3xl p-8">
                <ShieldCheck className="text-[#00E5FF] mb-6" size={40} />

                <h3 className="text-2xl font-semibold mb-5">
                  Segurança para informações sensíveis
                </h3>

                <div className="space-y-4">
                  {[
                    "Dados protegidos com criptografia",
                    "Controle de acesso por perfil",
                    "Base preparada para informações sigilosas",
                    "Conformidade com boas práticas de privacidade",
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle2
                        size={20}
                        className="text-[#00E5FF] mt-1"
                      />
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
              Falar com a Orbynex
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}