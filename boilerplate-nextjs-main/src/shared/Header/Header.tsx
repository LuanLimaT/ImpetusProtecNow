export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-[#003D82]">ProtecNow</h1>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Serviços
              </a>
              <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Depoimentos
              </a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contato
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}