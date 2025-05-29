"use client";
import { ShoppingCart, CheckCircle } from "lucide-react";
import { Service } from "@/types/example";

export default function  Services({ services, onServiceBuy }: { services: Service[], onServiceBuy: (service: Service) => void }) {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-4">
            NOSSOS PLANOS
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Escolha Sua <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Proteção</span>
          </h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Planos personalizados para proteger seu veículo com a melhor cobertura do mercado
          </p>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.nome} className={`group bg-white/90 backdrop-blur-md rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-3 transition-all duration-500 overflow-hidden ${index === 1 ? 'lg:scale-105 border-2 border-blue-200' : ''}`}>
              {index === 1 && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                  MAIS POPULAR
                </div>
              )}
              <div className="relative overflow-hidden">
                <img
                  src={service.imagem}
                  alt={service.nome}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  {service.categoria}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.nome}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.descricao}</p>
                <div className="mb-6">
                  <h5 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Cobertura:
                  </h5>
                  <ul className="text-sm text-slate-600 space-y-2">
                    {service.cobertura.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      R$ {service.preco.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-sm text-slate-500 ml-1">/mês</span>
                  </div>
                </div>
                <button
                  onClick={() => onServiceBuy(service)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <ShoppingCart size={18} className="group-hover:animate-pulse" />
                  Contratar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
