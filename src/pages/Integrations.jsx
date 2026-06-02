    import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Plug,
  Banknote,
  MessageCircle,
  ShoppingCart,
  Database,
  Bot,
  Cloud,
  ShieldCheck,
  Workflow,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Integrations() {
  const integrations = [
    {
      icon: <Banknote size={30} />,
      title: "Open Finance",
      text: "Conecte dados financeiros autorizados, contas, movimentações e indicadores com segurança.",
    },
    {
      icon: <MessageCircle size={30} />,
      title: "WhatsApp e atendimento",
      text: "Centralize conversas, clientes, histórico e fluxos de atendimento em um só ambiente.",
    },
    {
      icon: <ShoppingCart size={30} />,
      title: "Vendas e e-commerce",
      text: "Integre pedidos, clientes, canais digitais, oportunidades e funil comercial.",
    },
    {
      icon: <Database size={30} />,
      title: "ERPs e CRMs",
      text: "Conecte sistemas externos para centralizar dados empresariais e operacionais.",
    },
    {
      icon: <Bot size={30} />,
      title: "Inteligência Artificial",
      text: "Integre IA aos processos para automação, análise, respostas e tomada de decisão.",
    },
    {
      icon: <Cloud size={30} />,
      title: "APIs e nuvem",
      text: "Conecte serviços externos, bancos de dados, aplicações e plataformas digitais.",
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
              INTEGRAÇÕES ORBYNEX
            </span>

            <h1 className="mt-8 max-w-5xl text-5xl lg:text-7xl font-bold leading-tight">
              Conecte sistemas, dados e operações em um único ecossistema.
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-gray-300 leading-8">
              A Orbynex foi criada para integrar ferramentas, bancos,
              plataformas, canais de atendimento, dados financeiros, automações
              e inteligência artificial em uma experiência segura e centralizada.
            </p>

            <a
              href="/contato"
              className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Solicitar integração
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((item, index) => (
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
                CONEXÃO ENTRE FERRAMENTAS
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                Pare de trabalhar com sistemas isolados.
              </h2>

              <p className="mt-6 text-gray-400 leading-8 text-lg">
                A Orbynex permite que diferentes ferramentas conversem entre si,
                reduzindo retrabalho, melhorando a visão dos dados e tornando a
                operação mais inteligente.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "APIs para conexão com sistemas externos",
                "Base preparada para Open Finance",
                "Integração com canais de atendimento",
                "Conexão com vendas, CRM e financeiro",
                "Automação entre módulos e plataformas",
                "Segurança para dados sensíveis",
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
              PRINCIPAIS CONEXÕES
            </span>

            <h2 className="mt-4 max-w-4xl text-4xl lg:text-5xl font-bold leading-tight">
              Integrações pensadas para empresas, profissionais e pessoas.
            </h2>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Bancos",
                "WhatsApp",
                "CRMs",
                "ERPs",
                "E-commerce",
                "APIs",
                "IA",
                "Dados",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#111827]/70 border border-white/10 rounded-3xl p-7"
                >
                  <Plug className="text-[#00E5FF] mb-5" size={30} />
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
                  Integre, automatize e escale com segurança.
                </h2>

                <p className="mt-6 text-gray-300 text-lg leading-8">
                  Com a Orbynex, integrações deixam de ser apenas conexões
                  técnicas e passam a fazer parte de uma operação inteligente,
                  conectada e preparada para crescer.
                </p>
              </div>

              <div className="bg-[#0A0F1C]/70 border border-white/10 rounded-3xl p-8">
                <ShieldCheck className="text-[#00E5FF] mb-6" size={40} />

                <h3 className="text-2xl font-semibold mb-5">
                  Segurança nas conexões
                </h3>

                <div className="space-y-4">
                  {[
                    "Criptografia em trânsito e repouso",
                    "Controle de acesso por permissões",
                    "Proteção para informações sigilosas",
                    "Base preparada para integrações financeiras",
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
              Falar com especialista
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}