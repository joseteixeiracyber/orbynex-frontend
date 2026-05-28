// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B14] px-6 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#7C3AED]" />
            <span className="text-2xl tracking-[0.35em] font-semibold">
              ORBYNEX
            </span>
          </div>

          <p className="text-gray-400 max-w-sm">
            O ecossistema inteligente que conecta empresas e pessoas em uma
            gestão mais simples, inteligente e completa.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Produto</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Recursos</li>
            <li>Módulos</li>
            <li>Integrações</li>
            <li>Novidades</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Soluções</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Para Empresas</li>
            <li>Para Profissionais</li>
            <li>Para Pessoas</li>
            <li>Por Segmento</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Empresa</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Sobre nós</li>
            <li>Carreiras</li>
            <li>Blog</li>
            <li>Contato</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 Orbynex. Todos os direitos reservados.
      </div>
    </footer>
  );
}