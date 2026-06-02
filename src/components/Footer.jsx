// src/components/Footer.jsx

import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B14] px-6 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-5">
        
        {/* LOGO + DESCRIÇÃO */}
        <div className="lg:col-span-2 flex flex-col justify-start">
          
          <div className="flex items-center mb-8">
            <img
              src={Logo}
              alt="Orbynex"
              className="
                h-16
                md:h-20
                lg:h-24
                w-auto
                object-contain
                select-none
              "
            />
          </div>

          <p className="text-gray-400 max-w-md leading-8 text-lg">
            O ecossistema inteligente que conecta empresas e pessoas
            em uma gestão mais simples, inteligente e completa.
          </p>
        </div>

        {/* PRODUTO */}
        <div>
          <h4 className="font-semibold mb-5 text-white">
            Produto
          </h4>

          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white transition cursor-pointer">
              <Link to="/recursos" className="hover:text-white transition">
              Recursos
              </Link>
            </li>

            <li className="hover:text-white transition cursor-pointer">
              <Link to="/modulos" className="hover:text-white transition">
              Modulos
              </Link>
            </li>

            <li className="hover:text-white transition cursor-pointer">
              <Link to="/integracoes" className="hover:text-white transition" >
              Integrações
              </Link>
            </li>

            <li className="hover:text-white transition cursor-pointer">
              <Link to="/novidades" className="hover:text-white transition">
              Novidades
              </Link>
            </li>
          </ul>
        </div>

        {/* SOLUÇÕES */}
        <div>
          <h4 className="font-semibold mb-5 text-white">
            Soluções
          </h4>

          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white transition cursor-pointer">
              <Link to="/solucoes-para-empresas"className="hover:text-white transition">
                Para Empresas
              </Link>
            </li>

            <li className="hover:text-white transition cursor-pointer">
              
              <Link to="/solucoes-para-profissionais"className="hover:text-white transition">
                Para Profissionais
              </Link>
            </li>

            <li className="hover:text-white transition cursor-pointer">
              <Link to="/solucoes-para-pessoas" className="hover:text-white transition">
                Para Pessoas
              </Link>
            </li>

            <li className="hover:text-white transition cursor-pointer">
              <Link to="/solucoes-por-segmento" className="hover:text-white transition">
                Por Segmento
              </Link>
            </li>
          </ul>
        </div>

        {/* EMPRESA */}
        <div>
          <h4 className="font-semibold mb-5 text-white">
            Empresa
            
          </h4>

          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white transition cursor-pointer">
              <Link to="/sobre-nos"className="hover:text-white transition">
                Sobre nós
              </Link>
            </li>

            <li className="hover:text-white transition cursor-pointer">
              <Link to="/contato"className="hover:text-white transition">
                Contato
              </Link>
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <Link to="/politica-de-privacidade"className="hover:text-white transition">
                Privacidade
              </Link>
            </li>
            <li className="hover:text-white transition cursor-pointer">
              <Link to="/termos-de-uso"className="hover:text-white transition">
                Termos de Uso
              </Link>
            </li>
             </ul>
            </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 Orbynex. Todos os direitos reservados.
      </div>
    </footer>
  );
}