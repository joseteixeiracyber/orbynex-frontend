import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Building2,
  User,
} from "lucide-react";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="bg-[#0A0F1C] text-white min-h-screen overflow-hidden">
        <section className="relative px-6 lg:px-16 pt-36 pb-24">
          <div className="absolute top-20 left-[-160px] w-[420px] h-[420px] bg-[#2563EB]/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-[-160px] w-[520px] h-[520px] bg-[#7C3AED]/20 blur-[140px] rounded-full" />

          <div className="relative max-w-7xl mx-auto">
            <span className="inline-block bg-white/5 border border-white/10 px-5 py-2 rounded-full text-sm text-[#00E5FF]">
              FALE COM A ORBYNEX
            </span>

            <h1 className="mt-8 max-w-4xl text-5xl lg:text-7xl font-bold leading-tight">
              Vamos conectar sua empresa ao{" "}
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#7C3AED] bg-clip-text text-transparent">
                futuro.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-gray-300 leading-8">
              Entre em contato com a Orbynex para falar sobre soluções,
              parcerias, atendimento, vendas, integrações, tecnologia,
              automação, IA e novas oportunidades.
            </p>
          </div>
        </section>

        <section className="px-6 lg:px-16 pb-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
            <div className="bg-[#111827]/70 border border-white/10 rounded-3xl p-8 lg:p-10">
              <h2 className="text-3xl font-bold mb-6">
                Envie sua mensagem
              </h2>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Nome
                    </label>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-4">
                      <User size={18} className="text-[#00E5FF]" />
                      <input
                        type="text"
                        placeholder="Seu nome"
                        className="bg-transparent outline-none w-full text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Empresa
                    </label>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-4">
                      <Building2 size={18} className="text-[#00E5FF]" />
                      <input
                        type="text"
                        placeholder="Nome da empresa"
                        className="bg-transparent outline-none w-full text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      E-mail
                    </label>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-4">
                      <Mail size={18} className="text-[#00E5FF]" />
                      <input
                        type="email"
                        placeholder="seuemail@empresa.com"
                        className="bg-transparent outline-none w-full text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Telefone
                    </label>
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-4">
                      <Phone size={18} className="text-[#00E5FF]" />
                      <input
                        type="tel"
                        placeholder="(00) 00000-0000"
                        className="bg-transparent outline-none w-full text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Assunto
                  </label>
                  <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none w-full text-white">
                    <option className="bg-[#0A0F1C]">
                      Quero conhecer a Orbynex
                    </option>
                    <option className="bg-[#0A0F1C]">
                      Falar com vendas
                    </option>
                    <option className="bg-[#0A0F1C]">
                      Parcerias
                    </option>
                    <option className="bg-[#0A0F1C]">
                      Suporte
                    </option>
                    <option className="bg-[#0A0F1C]">
                      Open Finance e integrações
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Conte como a Orbynex pode ajudar você ou sua empresa..."
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none w-full text-white placeholder:text-gray-500 resize-none"
                  />
                </div>

                <button
                  type="button"
                  className="w-full md:w-auto bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
                >
                  Enviar mensagem
                  <Send size={18} />
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-[#111827]/70 border border-white/10 rounded-3xl p-8">
                <MessageCircle className="text-[#00E5FF] mb-5" size={34} />

                <h3 className="text-2xl font-bold mb-3">
                  Atendimento comercial
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  Fale com nosso time para entender como a Orbynex pode
                  transformar sua operação, vendas, atendimento e gestão.
                </p>

                <a
                  href="mailto:contato@orbynex.com.br"
                  className="text-[#00E5FF] hover:text-white transition"
                >
                  contato@orbynex.com.br
                </a>
              </div>

              <div className="bg-[#111827]/70 border border-white/10 rounded-3xl p-8">
                <Mail className="text-[#7C3AED] mb-5" size={34} />

                <h3 className="text-2xl font-bold mb-3">
                  Privacidade e segurança
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  Para assuntos relacionados a dados, LGPD, privacidade,
                  segurança da informação e solicitações legais.
                </p>

                <a
                  href="mailto:privacidade@orbynex.com.br"
                  className="text-[#00E5FF] hover:text-white transition"
                >
                  privacidade@orbynex.com.br
                </a>
              </div>

              <div className="bg-[#111827]/70 border border-white/10 rounded-3xl p-8">
                <MapPin className="text-[#00E5FF] mb-5" size={34} />

                <h3 className="text-2xl font-bold mb-3">
                  Onde estamos
                </h3>

                <p className="text-gray-400 leading-7">
                  Orbynex é uma empresa de tecnologia com atuação digital,
                  criada para conectar empresas, pessoas e soluções em qualquer
                  lugar.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}