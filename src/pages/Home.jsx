// src/pages/Home.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  Shield,
  BrainCircuit,
  BarChart3,
  Users,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#0A0F1C] text-white overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="relative pt-36 pb-28 px-6 lg:px-16">
        {/* EFEITOS */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-32 left-[-120px] w-[400px] h-[400px] bg-[#2563EB]/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-[-100px] w-[500px] h-[500px] bg-[#7C3AED]/20 blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* TEXTO */}
          <div>
            <span className="bg-[#111827] border border-[#2563EB]/20 px-4 py-2 rounded-full text-sm text-[#00E5FF]">
              UMA PLATAFORMA. INFINITAS POSSIBILIDADES.
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight">
              Tudo conectado.
              <br />
              Inteligência que{" "}
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] bg-clip-text text-transparent">
                transforma.
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-300 max-w-2xl leading-relaxed">
              A Orbynex conecta empresas e pessoas em uma plataforma moderna,
              inteligente e integrada. Gestão, automação, finanças, produtividade
              e IA em um só lugar.
            </p>

            {/* BOTÕES */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition">
                Começar agora
                <ArrowRight size={18} />
              </button>

              <button className="border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition">
                Conhecer produto
              </button>
            </div>

            {/* FEATURES */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <BrainCircuit className="text-[#7C3AED]" />
                <span className="text-sm text-gray-300">
                  Inteligência Artificial
                </span>
              </div>

              <div className="flex items-center gap-3">
                <BarChart3 className="text-[#00E5FF]" />
                <span className="text-sm text-gray-300">
                  Gestão Inteligente
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Users className="text-[#7C3AED]" />
                <span className="text-sm text-gray-300">
                  Foco em Pessoas
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Shield className="text-[#00E5FF]" />
                <span className="text-sm text-gray-300">
                  Segurança Total
                </span>
              </div>
            </div>
          </div>

          {/* DASHBOARD MOCKUP */}
          <div className="relative">
            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 blur-[80px]" />

            {/* CARD */}
            <div className="relative bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl">
              {/* TOPBAR */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <span className="text-sm text-gray-400">
                  Dashboard Orbynex
                </span>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0F172A] rounded-2xl p-5 border border-white/5">
                  <span className="text-gray-400 text-sm">Receita</span>

                  <h3 className="text-3xl font-bold mt-2">
                    R$ 245K
                  </h3>

                  <span className="text-green-400 text-sm">
                    +18.2%
                  </span>
                </div>

                <div className="bg-[#0F172A] rounded-2xl p-5 border border-white/5">
                  <span className="text-gray-400 text-sm">Clientes</span>

                  <h3 className="text-3xl font-bold mt-2">
                    1.250
                  </h3>

                  <span className="text-[#00E5FF] text-sm">
                    +320 novos
                  </span>
                </div>

                {/* CHART */}
                <div className="col-span-2 bg-[#0F172A] rounded-2xl p-6 border border-white/5">
                  <div className="flex justify-between mb-8">
                    <span className="font-medium">
                      Performance
                    </span>

                    <span className="text-sm text-gray-400">
                      Últimos 30 dias
                    </span>
                  </div>

                  <div className="flex items-end gap-4 h-44">
                    {[40, 80, 55, 110, 95, 140, 120].map((item, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-xl bg-gradient-to-t from-[#2563EB] to-[#7C3AED]"
                        style={{ height: `${item}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* FLOAT CARD */}
              <div className="absolute -bottom-10 -right-6 bg-[#0F172A] border border-white/10 rounded-2xl p-5 shadow-2xl w-64">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-400">
                      Automação IA
                    </span>

                    <h4 className="text-xl font-bold mt-1">
                      98%
                    </h4>
                  </div>

                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] flex items-center justify-center">
                    <Check />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARCEIROS */}
      <section className="px-6 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto border border-white/10 rounded-3xl bg-[#111827]/40 backdrop-blur-xl px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 text-center text-gray-400">
            <span>MOVEON</span>
            <span>NEXORA</span>
            <span>PULSE</span>
            <span>LUMEN</span>
            <span>TECHCORE</span>
            <span>VALORIS</span>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="px-6 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <span className="text-[#00E5FF] text-sm tracking-widest">
              POR QUE ORBYNEX?
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
              Um ecossistema completo
              <br />
              para empresas e pessoas
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Gestão Empresarial",
              "Relacionamento",
              "Finanças Inteligentes",
              "Saúde & Bem-estar",
              "Produtividade",
              "Automação & IA",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#111827]/60 border border-white/10 rounded-3xl p-8 hover:border-[#7C3AED]/40 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 flex items-center justify-center mb-6">
                  <BrainCircuit className="text-[#00E5FF]" />
                </div>

                <h3 className="text-2xl font-semibold">
                  {item}
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  Plataforma moderna para otimizar processos,
                  aumentar produtividade e conectar resultados.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}