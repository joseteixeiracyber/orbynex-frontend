// src/components/Header.jsx
import { Menu } from "lucide-react";
import Logo from "../img/Logo.png";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0F1C]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
         <a href="/"><img src={Logo} alt="Orbynex"
  className="
    h-10
    md:h-30
    lg:h-44
    w-auto
    mt-4
    object-contain
  "
/>
</a>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-300">
          <a href="/">Produto</a>
          <a href="/solucoes">Soluções</a>
          <a href="/recursos">Recursos</a>
          <a href="/sobre-nos">Sobre</a>
          <a href="/contato">Contato</a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button className="text-sm text-gray-300">Entrar</button>
          <button className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-5 py-3 rounded-lg text-sm font-semibold">
            Agendar consultoria
          </button>
        </div>

        <button className="lg:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
}