import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  BrainCircuit,
  Building2,
  Users,
  ShieldCheck,
  Rocket,
  Network,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  return (
    <>
      <Header />

      <main className="bg-[#0A0F1C] text-white overflow-hidden">
        <section className="relative px-6 lg:px-16 pt-36 pb-24">
          <div className="absolute top-20 left-[-160px] w-[420px] h-[420px] bg-[#2563EB]/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-[-160px] w-[520px] h-[520px] bg-[#7C3AED]/20 blur-[140px] rounded-full" />

          <div className="relative max-w-7xl mx-auto">
            <span className="inline-block bg-white/5 border border-white/10 px-5 py-2 rounded-full text-sm text-[#00E5FF]">
              SOBRE A ORBYNEX
            </span>

            <h1 className="mt-8 max-w-5xl text-5xl lg:text-7xl font-bold leading-tight">
              Conectando pessoas, empresas e oportunidades em um único{" "}
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] bg-clip-text text-transparent">
                ecossistema.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-gray-300 leading-8">
              A Orbynex nasceu para simplificar a forma como pessoas físicas,
              profissionais, pequenos negócios, grandes empresas e grupos
              corporativos gerenciam suas operações, vendas, finanças,
              atendimento, dados e crescimento.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/"
                className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                Conhecer soluções
                <ArrowRight size={18} />
              </a>

              <a
                href="/termos-de-uso"
                className="border border-white/10 bg-white/5 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                Segurança e confiança
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#00E5FF] text-sm tracking-widest">
                QUEM SOMOS
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                Um grupo de soluções para todo tipo de mercado.
              </h2>
            </div>

            <p className="text-gray-300 leading-8 text-lg">
              A Orbynex representa conexão, evolução e inteligência aplicada ao
              mundo real. Nossa proposta é reunir diferentes soluções em uma
              única plataforma, atendendo desde uma pessoa física que deseja
              organizar sua vida financeira até uma empresa que precisa vender
              mais, automatizar processos, atender melhor seus clientes e tomar
              decisões com dados.
            </p>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Building2 />,
                title: "Empresas",
                text: "Gestão, vendas, financeiro, atendimento, automação e dados.",
              },
              {
                icon: <Users />,
                title: "Pessoas",
                text: "Organização, finanças, produtividade e inteligência pessoal.",
              },
              {
                icon: <Network />,
                title: "Mercados",
                text: "Soluções para comércio, serviços, profissionais e operações digitais.",
              },
              {
                icon: <BrainCircuit />,
                title: "Inteligência",
                text: "IA integrada para automatizar tarefas e gerar decisões melhores.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#111827]/60 border border-white/10 rounded-3xl p-7 hover:border-[#7C3AED]/40 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 flex items-center justify-center text-[#00E5FF] mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>

                <p className="text-gray-400 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="bg-[#111827]/70 border border-white/10 rounded-3xl p-8">
              <Rocket className="text-[#00E5FF] mb-6" size={34} />
              <h3 className="text-3xl font-bold mb-4">Nossa missão</h3>
              <p className="text-gray-400 leading-8">
                Conectar empresas e pessoas através de tecnologia simples,
                segura e inteligente, transformando processos complexos em
                soluções acessíveis para todos.
              </p>
            </div>

            <div className="bg-[#111827]/70 border border-white/10 rounded-3xl p-8">
              <Network className="text-[#7C3AED] mb-6" size={34} />
              <h3 className="text-3xl font-bold mb-4">Nossa visão</h3>
              <p className="text-gray-400 leading-8">
                Construir um dos maiores ecossistemas de tecnologia, onde dados,
                vendas, finanças, pessoas, empresas e inteligência artificial
                orbitam em um só lugar.
              </p>
            </div>

            <div className="bg-[#111827]/70 border border-white/10 rounded-3xl p-8">
              <ShieldCheck className="text-[#00E5FF] mb-6" size={34} />
              <h3 className="text-3xl font-bold mb-4">Nossa essência</h3>
              <p className="text-gray-400 leading-8">
                Segurança, inovação, transparência e evolução contínua. A
                Orbynex foi criada para crescer junto com seus usuários,
                parceiros e empresas.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-24 bg-[#070B14] border-y border-white/10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#00E5FF] text-sm tracking-widest">
                ECOSSISTEMA ORBYNEX
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                Tudo se conecta. Tudo orbita em um só lugar.
              </h2>

              <p className="mt-6 text-gray-400 leading-8 text-lg">
                A Orbynex é mais que um sistema. É uma base tecnológica para
                diferentes realidades: vendas, CRM, atendimento, automação,
                gestão financeira, Open Finance, relacionamento com clientes,
                produtividade, inteligência artificial e muito mais.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Vendas e CRM",
                "Atendimento",
                "Gestão financeira",
                "Open Finance",
                "Automação",
                "Inteligência Artificial",
                "Relatórios e dados",
                "Produtividade",
                "Integrações",
                "Gestão empresarial",
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

        <section className="px-6 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 border border-white/10 rounded-[2rem] p-8 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  O futuro é conectado, inteligente e seguro.
                </h2>

                <p className="mt-6 text-gray-300 leading-8 text-lg">
                  A Orbynex trabalha com visão de longo prazo: criar uma
                  plataforma capaz de acompanhar qualquer negócio, de qualquer
                  tamanho, em qualquer fase.
                </p>
              </div>

              <div className="bg-[#0A0F1C]/70 border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  Segurança como prioridade
                </h3>

                <div className="space-y-4 text-gray-300">
                  {[
                    "Dados protegidos com criptografia",
                    "Ambientes preparados para informações sigilosas",
                    "Conformidade com boas práticas de privacidade",
                    "Base para integrações com Open Finance e APIs",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-[#00E5FF] mt-1"
                        size={20}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}