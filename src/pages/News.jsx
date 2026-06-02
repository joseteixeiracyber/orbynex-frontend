import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Sparkles,
  Rocket,
  BrainCircuit,
  ShieldCheck,
  Plug,
  Wallet,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

export default function News() {
  const news = [
    {
      icon: <Rocket size={30} />,
      tag: "Lançamento",
      title: "Orbynex inicia sua jornada como ecossistema de soluções",
      text: "A plataforma nasce com a missão de conectar empresas, pessoas, dados, vendas, finanças e inteligência em um único lugar.",
    },
    {
      icon: <BrainCircuit size={30} />,
      tag: "Inteligência Artificial",
      title: "IA integrada ao centro da experiência Orbynex",
      text: "A Orbynex prepara recursos inteligentes para automação, análise de dados, atendimento, produtividade e tomada de decisão.",
    },
    {
      icon: <Wallet size={30} />,
      tag: "Open Finance",
      title: "Base preparada para conexões financeiras seguras",
      text: "A estrutura da Orbynex foi pensada para evoluir com integrações financeiras, dados autorizados e experiências conectadas.",
    },
    {
      icon: <Plug size={30} />,
      tag: "Integrações",
      title: "Conectando sistemas, canais e operações",
      text: "A plataforma caminha para centralizar APIs, CRMs, ERPs, WhatsApp, bancos, e-commerce e dados operacionais.",
    },
    {
      icon: <ShieldCheck size={30} />,
      tag: "Segurança",
      title: "Privacidade e proteção como prioridade",
      text: "A Orbynex adota uma visão focada em criptografia, controle de acesso, proteção de dados e boas práticas de segurança.",
    },
    {
      icon: <Sparkles size={30} />,
      tag: "Produto",
      title: "Novos módulos em desenvolvimento",
      text: "CRM, vendas, financeiro, atendimento, automações, agenda, relatórios e IA fazem parte da visão modular da plataforma.",
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
              NOVIDADES ORBYNEX
            </span>

            <h1 className="mt-8 max-w-5xl text-5xl lg:text-7xl font-bold leading-tight">
              Acompanhe a evolução do ecossistema Orbynex.
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-gray-300 leading-8">
              Fique por dentro dos avanços, lançamentos, módulos, integrações,
              segurança, inteligência artificial e novidades que estão moldando
              a próxima geração da Orbynex.
            </p>
          </div>
        </section>

        <section className="px-6 lg:px-16 py-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article
                key={index}
                className="bg-[#111827]/60 border border-white/10 rounded-3xl p-8 hover:border-[#7C3AED]/40 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 flex items-center justify-center text-[#00E5FF] mb-6">
                  {item.icon}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                  <CalendarDays size={16} />
                  <span>2026</span>
                  <span className="text-[#00E5FF]">• {item.tag}</span>
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00E5FF] text-sm tracking-widest">
                EVOLUÇÃO CONSTANTE
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                A Orbynex está sendo construída para crescer junto com o
                mercado.
              </h2>

              <p className="mt-6 text-gray-400 leading-8 text-lg">
                Nosso objetivo é evoluir continuamente, criando recursos que
                simplificam operações, conectam dados, fortalecem empresas e
                tornam a tecnologia mais acessível para todos.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Novos módulos da plataforma",
                "Melhorias de segurança e privacidade",
                "Integrações com sistemas e APIs",
                "Recursos com Inteligência Artificial",
                "Experiências para empresas, profissionais e pessoas",
                "Evolução do ecossistema Orbynex",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
                >
                  <Sparkles className="text-[#00E5FF]" size={20} />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

       
        <section className="px-6 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 border border-white/10 rounded-[2rem] p-10 lg:p-16">
            <h2 className="max-w-4xl text-4xl lg:text-6xl font-bold leading-tight">
              Quer acompanhar ou fazer parte da evolução da Orbynex?
            </h2>

            <p className="mt-6 max-w-3xl text-gray-300 text-lg leading-8">
              Entre em contato para conhecer as próximas soluções, possibilidades
              de parceria, integrações e oportunidades dentro do ecossistema.
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