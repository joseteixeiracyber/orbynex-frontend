import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Users,
  Calendar,
  Wallet,
  BrainCircuit,
  Workflow,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function ProfessionalSolutions() {
  const resources = [
    {
      icon: <Users size={30} />,
      title: "Gestão de Clientes",
      text: "Organize contatos, histórico, oportunidades e relacionamento em um único lugar.",
    },
    {
      icon: <Calendar size={30} />,
      title: "Agenda Inteligente",
      text: "Gerencie compromissos, reuniões, atendimentos e tarefas diárias.",
    },
    {
      icon: <Wallet size={30} />,
      title: "Controle Financeiro",
      text: "Acompanhe receitas, cobranças, pagamentos e indicadores financeiros.",
    },
    {
      icon: <BrainCircuit size={30} />,
      title: "IA para Produtividade",
      text: "Automatize tarefas, organize informações e aumente sua eficiência.",
    },
    {
      icon: <Workflow size={30} />,
      title: "Automação",
      text: "Reduza atividades repetitivas e concentre-se no que realmente importa.",
    },
    {
      icon: <FileText size={30} />,
      title: "Documentos e Relatórios",
      text: "Centralize informações e acompanhe resultados de forma profissional.",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-[#0A0F1C] text-white overflow-hidden">
        {/* HERO */}
        <section className="relative px-6 lg:px-16 pt-36 pb-24">
          <div className="absolute top-0 left-[-120px] w-[420px] h-[420px] bg-[#2563EB]/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-[-120px] w-[520px] h-[520px] bg-[#7C3AED]/20 blur-[140px] rounded-full" />

          <div className="relative max-w-7xl mx-auto">
            <span className="inline-block bg-white/5 border border-white/10 px-5 py-2 rounded-full text-sm text-[#00E5FF]">
              SOLUÇÕES PARA PROFISSIONAIS
            </span>

            <h1 className="mt-8 max-w-5xl text-5xl lg:text-7xl font-bold leading-tight">
              Mais organização, produtividade e crescimento para sua carreira.
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-gray-300 leading-8">
              A Orbynex ajuda profissionais autônomos, consultores,
              especialistas e prestadores de serviço a gerenciar clientes,
              agenda, finanças e produtividade em um único ambiente.
            </p>

            <a
              href="/contato"
              className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Conhecer a plataforma
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* RECURSOS */}
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

        {/* BENEFÍCIOS */}
        <section className="px-6 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00E5FF] text-sm tracking-widest">
                FEITO PARA PROFISSIONAIS
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                Tudo que você precisa para administrar sua rotina.
              </h2>

              <p className="mt-6 text-gray-400 leading-8 text-lg">
                A Orbynex centraliza informações importantes e elimina a
                necessidade de utilizar várias ferramentas desconectadas.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Gestão completa de clientes",
                "Agenda e compromissos",
                "Controle financeiro pessoal e profissional",
                "Automação de tarefas",
                "Relatórios e indicadores",
                "Inteligência Artificial integrada",
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

        {/* PÚBLICO */}
        <section className="px-6 lg:px-16 py-24 bg-[#070B14] border-y border-white/10">
          <div className="max-w-7xl mx-auto">
            <span className="text-[#00E5FF] text-sm tracking-widest">
              PARA QUEM É
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Profissionais de todas as áreas.
            </h2>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Consultores",
                "Advogados",
                "Corretores",
                "Contadores",
                "Agências",
                "Designers",
                "Desenvolvedores",
                "Prestadores de Serviço",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#111827]/70 border border-white/10 rounded-3xl p-7"
                >
                  <h3 className="text-xl font-semibold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEGURANÇA */}
        <section className="px-6 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 border border-white/10 rounded-[2rem] p-10 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Sua informação protegida em todos os momentos.
                </h2>

                <p className="mt-6 text-gray-300 text-lg leading-8">
                  Segurança, privacidade e confiabilidade fazem parte da
                  essência da Orbynex.
                </p>
              </div>

              <div className="bg-[#0A0F1C]/70 border border-white/10 rounded-3xl p-8">
                <ShieldCheck
                  className="text-[#00E5FF] mb-6"
                  size={40}
                />

                <div className="space-y-4">
                  {[
                    "Criptografia de dados",
                    "Controle de acesso seguro",
                    "Proteção de informações sensíveis",
                    "Infraestrutura preparada para crescimento",
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