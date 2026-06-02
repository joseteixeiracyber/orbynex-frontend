// src/components/Header.jsx

import { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "../img/Logo.png";
import ContactModal from "../pages/ContactModal";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ContactModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

      <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0F1C]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              alt="Orbynex"
              className="h-10 md:h-12 lg:h-14 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-300">
            <a href="/">Produto</a>
            <a href="/solucoes">Soluções</a>
            <a href="/recursos">Recursos</a>
            <a href="/sobre-nos">Sobre</a>
            <a href="/contato">Contato</a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setOpenModal(true)}
              className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-3 rounded-lg text-sm font-semibold hover:scale-105 transition"
            >
              Agendar consultoria
            </button>
          </div>

          <button className="lg:hidden text-white">
            <Menu />
          </button>
        </div>
      </header>
    </>
  );
}