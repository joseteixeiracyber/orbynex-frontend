import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  LayoutDashboard,
  Users,
  MessageSquareText,
  Wallet,
  BrainCircuit,
  Workflow,
  Plug,
  ShieldCheck,
  FileText,
  Calendar,
  ShoppingCart,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Modules() {
  const modules = [
    {
      icon: <LayoutDashboard size={30} />,
      title: "Dashboard Executivo",
      text: "Indicadores, relatórios e visão geral da operação em tempo real.",
    },
    {
      icon: <Users size={30} />,
      title: "CRM e Clientes",
      text: "Gestão de contatos, oportunidades, histórico e relacionamento.",
    },
    {
      icon: <ShoppingCart size={30} />,
      title: "Vendas",
      text: "Funil comercial, propostas, pedidos, metas e performance.",
    },
    {
      icon: <MessageSquareText size={30} />,
      title: "Atendimento",
      text: "Centralização de conversas, solicitações e jornada do cliente.",
    },
    {
      icon: <Wallet size={30} />,
      title: "Financeiro",
      text: "Receitas, despesas, cobranças, indicadores e Open Finance.",
    },
    {
      icon: <Calendar size={30} />,
      title: "Agenda e Tarefas",
      text: "Compromissos, lembretes, rotinas, produtividade e organização.",
    },
    {
      icon: <BrainCircuit size={30} />,
      title: "Inteligência Artificial",
      text: "Automação, insights, análise de dados e apoio à tomada de decisão.",
    },
    {
      icon: <Workflow size={30} />,
      title: "Automações",
      text: "Fluxos inteligentes para reduzir tarefas repetitivas e acelerar processos.",
    },
    {
      icon: <Plug size={30} />,
      title: "Integrações",
      text: "APIs, bancos, WhatsApp, ERPs, CRMs e sistemas externos conectados.",
    },
    {
      icon: <FileText size={30} />,
      title: "Documentos",
      text: "Organização de arquivos, contratos, relatórios e informações importantes.",
    },
    {
      icon: <Building2 size={30} />,
      title: "Gestão Empresarial",
      text: "Controle de áreas, equipes, processos, unidades e operações.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Segurança e Permissões",
      text: "Controle de acesso, privacidade, criptografia e proteção de dados.",
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
              MÓDULOS ORBYNEX
            </span>

            <h1 className="mt-8 max-w-5xl text-5xl lg:text-7xl font-bold leading-tight">
              Soluções modulares para conectar toda a operação da sua empresa.
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-gray-300 leading-8">
              A Orbynex reúne módulos inteligentes para vendas, atendimento,
              financeiro, CRM, automações, IA, integrações, produtividade e
              gestão empresarial em um único ecossistema.
            </p>

            <a
              href="/contato"
              className="mt-10 inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Solicitar demonstração
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((item, index) => (
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
                UMA PLATAFORMA FLEXÍVEL
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                Use os módulos que sua empresa precisa hoje e evolua quando
                precisar.
              </h2>

              <p className="mt-6 text-gray-400 leading-8 text-lg">
                A Orbynex foi pensada para crescer junto com sua operação. Você
                pode começar com recursos essenciais e expandir para módulos
                mais avançados conforme sua empresa evolui.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Módulos conectados entre si",
                "Visão unificada de dados",
                "Fluxos adaptáveis para cada negócio",
                "Automação entre áreas",
                "Controle por permissões",
                "Base preparada para integrações e IA",
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
              CONEXÃO ENTRE ÁREAS
            </span>

            <h2 className="mt-4 max-w-4xl text-4xl lg:text-5xl font-bold leading-tight">
              Vendas, atendimento, financeiro, dados e IA trabalhando juntos.
            </h2>

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Comercial",
                "Atendimento",
                "Financeiro",
                "Operações",
                "Gestão",
                "Equipe",
                "Clientes",
                "Dados",
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
            <h2 className="max-w-4xl text-4xl lg:text-6xl font-bold leading-tight">
              Transforme módulos em um ecossistema completo para sua empresa.
            </h2>

            <p className="mt-6 max-w-3xl text-gray-300 text-lg leading-8">
              A Orbynex conecta tudo em um único lugar para que sua empresa
              tenha mais controle, produtividade, inteligência e segurança.
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