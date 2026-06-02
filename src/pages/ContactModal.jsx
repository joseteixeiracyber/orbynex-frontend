import { useState } from "react";
import { X, Phone, MessageCircle, Bot, ArrowLeft, Send } from "lucide-react";

export default function ContactModal({ open, onClose }) {
  const [step, setStep] = useState("options");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  if (!open) return null;

  const isValid =
    form.name && form.email && form.phone && form.company && form.message;

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function closeModal() {
    setStep("options");
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-[#111827] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Fale com a Orbynex
            </h2>
            <p className="text-gray-400 mt-2">
              Escolha como deseja iniciar seu atendimento.
            </p>
          </div>

          <button onClick={closeModal} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {step === "options" && (
          <div className="p-8 grid md:grid-cols-3 gap-4">
            <button
              onClick={() => setStep("form")}
              className="bg-[#0A0F1C] border border-white/10 rounded-2xl p-6 hover:border-[#2563EB] transition"
            >
              <Phone size={36} className="text-[#00E5FF] mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Receber contato</h3>
              <p className="text-gray-400 text-sm mt-2">
                Nossa equipe entra em contato.
              </p>
            </button>

            <a
              href="https://w.app/orbynex"
              target="_blank"
              rel="noreferrer"
              className="bg-[#0A0F1C] border border-white/10 rounded-2xl p-6 hover:border-green-500 transition text-center"
            >
              <MessageCircle size={36} className="text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">WhatsApp</h3>
              <p className="text-gray-400 text-sm mt-2">
                Atendimento das 09:30 às 17:30 em dias úteis.
              </p>
            </a>

            <button
              onClick={() => setStep("ai")}
              className="bg-[#0A0F1C] border border-white/10 rounded-2xl p-6 hover:border-[#7C3AED] transition"
            >
              <Bot size={36} className="text-[#7C3AED] mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Consultora IA</h3>
              <p className="text-gray-400 text-sm mt-2">
                Atendimento inteligente 24h.
              </p>
            </button>
          </div>
        )}

        {step === "form" && (
          <div className="p-8">
            <button
              onClick={() => setStep("options")}
              className="flex items-center gap-2 text-gray-400 hover:text-white mb-6"
            >
              <ArrowLeft size={18} />
              Voltar
            </button>

            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Seu nome" className="bg-[#0A0F1C] border border-white/10 rounded-xl p-4 outline-none" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Seu e-mail" className="bg-[#0A0F1C] border border-white/10 rounded-xl p-4 outline-none" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Telefone" className="bg-[#0A0F1C] border border-white/10 rounded-xl p-4 outline-none" />
              <input name="company" value={form.company} onChange={handleChange} placeholder="Empresa" className="bg-[#0A0F1C] border border-white/10 rounded-xl p-4 outline-none" />
            </div>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Conte brevemente como podemos ajudar..."
              rows="5"
              className="mt-4 w-full bg-[#0A0F1C] border border-white/10 rounded-xl p-4 outline-none resize-none"
            />

            <button
              disabled={!isValid}
              className={`mt-6 w-full md:w-auto px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition ${
                isValid
                  ? "bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:scale-105"
                  : "bg-white/10 text-gray-500 cursor-not-allowed"
              }`}
            >
              Solicitar contato
              <Send size={18} />
            </button>
          </div>
        )}

        {step === "ai" && (
          <div className="p-8">
            <button
              onClick={() => setStep("options")}
              className="flex items-center gap-2 text-gray-400 hover:text-white mb-6"
            >
              <ArrowLeft size={18} />
              Voltar
            </button>

            <div className="bg-[#0A0F1C] border border-white/10 rounded-2xl p-8 text-center">
              <Bot size={48} className="text-[#7C3AED] mx-auto mb-4" />
              <h3 className="text-2xl font-bold">Consultora IA Orbynex</h3>
              <p className="text-gray-400 mt-3">
                Em breve você poderá conversar com nossa consultora IA direto por aqui.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}