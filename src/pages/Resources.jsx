import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  BarChart3,
  Bot,
  ShieldCheck,
  Zap,
  MessageSquareText,
  Wallet,
  Users,
  Plug,
  FileText,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Resources() {
  const resources = [
    {
      icon: <BarChart3 size={30} />,
      title: "Dashboards inteligentes",
      text: "Visualize indicadores, vendas, atendimento, financeiro e operação em tempo real.",
    },
    {
      icon: <Bot size={30} />,
      title: "IA integrada",
      text: "Automatize tarefas, gere insights e aumente a produtividade com inteligência artificial.",
    },
    {
      icon: <MessageSquareText size={30} />,
      title: "Atendimento conectado",
      text: "Centralize conversas, clientes e histórico em uma experiência integrada.",
    },
    {
      icon: <Wallet size={30} />,
      title: "Gestão financeira",
      text: "Controle receitas, despesas, cobranças, indicadores e integrações financeiras.",
    },
    {
      icon: <Zap size={30} />,
      title: "Automações",
      text: "Crie fluxos para reduzir tarefas repetitivas e acelerar processos.",
    },
    {
      icon: <Plug size={30} />,
      title: "Integrações",
      text: "Conecte APIs, bancos, ERPs, CRMs, WhatsApp e outros sistemas.",
    },
    {
      icon: <Users size={30} />,
      title: "Gestão de clientes",
      text: "Organize pessoas, empresas, oportunidades, vendas e relacionamento.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Segurança avançada",
      text: "Dados protegidos com criptografia, controle de acesso e boas práticas LGPD.",
    },
    {
      icon: <FileText size={30} />,
      title: "Relatórios completos",
      text: "Transforme dados em decisões com relatórios claros, rápidos e estratégicos.",
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
              RECURSOS ORBYNEX
            </span>

            <h1 className="mt-8 max-w-5xl text-5xl lg:text-7xl font-bold leading-tight">
              Recursos para conectar, automatizar e transformar sua operação.
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-gray-300 leading-8">
              A Orbynex reúne ferramentas essenciais para empresas, pessoas e
              profissionais gerenciarem vendas, atendimento, dados, finanças,
              automações e inteligência artificial em um único ecossistema.
            </p>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((item, index) => (
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
                MAIS CONTROLE, MENOS COMPLEXIDADE
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                Tudo que sua operação precisa em uma experiência simples.
              </h2>

              <p className="mt-6 text-gray-400 leading-8 text-lg">
                Em vez de espalhar informações em várias ferramentas, a Orbynex
                centraliza recursos essenciais em um ambiente seguro,
                inteligente e preparado para crescimento.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Visão completa da operação",
                "Processos automatizados",
                "Dados financeiros conectados",
                "Atendimento e vendas integrados",
                "IA aplicada ao dia a dia",
                "Base segura para escalar",
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
                PARA TODOS OS TIPOS DE USO
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                Recursos pensados para diferentes realidades.
              </h2>

              <p className="mt-6 text-gray-400 leading-8 text-lg">
                A Orbynex foi criada para atender desde pessoas físicas e
                profissionais autônomos até pequenos negócios, empresas em
                crescimento e grandes operações.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Pessoa física",
                "Profissionais",
                "Pequenos negócios",
                "Empresas e grupos",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#111827]/70 border border-white/10 rounded-3xl p-7"
                >
                  <h3 className="text-2xl font-semibold mb-4">{item}</h3>
                  <p className="text-gray-400 leading-7">
                    Ferramentas flexíveis para organizar, vender, atender,
                    automatizar e crescer com mais inteligência.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 border border-white/10 rounded-[2rem] p-10 lg:p-16">
            <h2 className="max-w-3xl text-4xl lg:text-6xl font-bold leading-tight">
              Transforme recursos em resultados reais.
            </h2>

            <p className="mt-6 max-w-3xl text-gray-300 text-lg leading-8">
              Com a Orbynex, tecnologia, dados, pessoas e processos trabalham
              juntos para impulsionar o crescimento.
            </p>

            <a
              href="/contato"
              className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
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