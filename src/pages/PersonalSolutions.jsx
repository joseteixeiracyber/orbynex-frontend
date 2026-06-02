import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  User,
  Wallet,
  Calendar,
  Target,
  BrainCircuit,
  ShieldCheck,
  BarChart3,
  Bell,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function PersonalSolutions() {
  const cards = [
    {
      icon: <Wallet size={30} />,
      title: "Controle financeiro pessoal",
      text: "Organize receitas, despesas, metas, contas e movimentações em um único lugar.",
    },
    {
      icon: <BarChart3 size={30} />,
      title: "Open Finance",
      text: "Conecte dados financeiros autorizados para ter uma visão mais completa da sua vida financeira.",
    },
    {
      icon: <Calendar size={30} />,
      title: "Agenda e rotina",
      text: "Gerencie compromissos, lembretes, tarefas e prioridades do seu dia a dia.",
    },
    {
      icon: <Target size={30} />,
      title: "Metas e planejamento",
      text: "Crie objetivos pessoais, acompanhe evolução e organize seus próximos passos.",
    },
    {
      icon: <BrainCircuit size={30} />,
      title: "IA pessoal",
      text: "Use inteligência artificial para organizar informações, gerar ideias e melhorar decisões.",
    },
    {
      icon: <Bell size={30} />,
      title: "Alertas inteligentes",
      text: "Receba lembretes importantes sobre finanças, compromissos e oportunidades.",
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
              SOLUÇÕES PARA PESSOAS
            </span>

            <h1 className="mt-8 max-w-5xl text-5xl lg:text-7xl font-bold leading-tight">
              Sua vida mais organizada, conectada e inteligente.
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-gray-300 leading-8">
              A Orbynex ajuda pessoas físicas a organizar finanças, rotina,
              metas, dados, compromissos e decisões em um único ecossistema
              seguro e intuitivo.
            </p>

            <a
              href="/contato"
              className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Conhecer a Orbynex
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
                PARA SUA VIDA DIGITAL
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                Tudo que importa para você em uma única experiência.
              </h2>

              <p className="mt-6 text-gray-400 leading-8 text-lg">
                Em vez de espalhar informações entre aplicativos, planilhas e
                anotações, a Orbynex centraliza sua organização pessoal em um
                ambiente simples, seguro e inteligente.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Controle de finanças pessoais",
                "Organização de metas e objetivos",
                "Agenda, tarefas e lembretes",
                "Dados conectados com segurança",
                "Insights com Inteligência Artificial",
                "Experiência simples para o dia a dia",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
                >
                  <CheckCircle2 className="text-[#00E5FF]" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-24 bg-[#070B14] border-y border-white/10">
          <div className="max-w-7xl mx-auto">
            <span className="text-[#00E5FF] text-sm tracking-widest">
              O QUE VOCÊ PODE ORGANIZAR
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
              Uma plataforma para acompanhar sua evolução pessoal.
            </h2>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Finanças",
                "Rotina",
                "Metas",
                "Compromissos",
                "Projetos pessoais",
                "Documentos",
                "Planejamento",
                "Decisões",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#111827]/70 border border-white/10 rounded-3xl p-7"
                >
                  <User className="text-[#00E5FF] mb-5" size={30} />
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
                  Seus dados protegidos. Sua vida mais conectada.
                </h2>

                <p className="mt-6 text-gray-300 text-lg leading-8">
                  A Orbynex foi criada para unir praticidade, segurança e
                  inteligência em uma experiência preparada para o futuro.
                </p>
              </div>

              <div className="bg-[#0A0F1C]/70 border border-white/10 rounded-3xl p-8">
                <ShieldCheck className="text-[#00E5FF] mb-6" size={40} />

                <div className="space-y-4">
                  {[
                    "Criptografia de dados",
                    "Privacidade como prioridade",
                    "Controle sobre suas informações",
                    "Base para Open Finance e integrações seguras",
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