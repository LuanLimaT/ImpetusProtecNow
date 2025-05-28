"use client";
import { CheckCircle, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-purple-400/40 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-400/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">Mais de 50.000 clientes protegidos</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            Proteja Seu <span className="text-blue-300">Veículo</span> com Segurança
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Seguros veiculares completos e personalizados. Proteção total para você e sua família 
            com a melhor tecnologia e atendimento do mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                Fazer Cotação Grátis
              </span>
            </button>
            <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105">
              Saiba Mais
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-300">98%</div>
              <div className="text-sm text-blue-100">Satisfação</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-purple-300">24h</div>
              <div className="text-sm text-blue-100">Atendimento</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-2xl font-bold text-cyan-300">20+</div>
              <div className="text-sm text-blue-100">Anos no mercado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}