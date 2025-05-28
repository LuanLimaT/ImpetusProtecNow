
"use client";
import { Shield, Phone, Mail, MapPin, Heart } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
  <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ProtecNow</h4>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Sua segurança é nossa prioridade. Proteção veicular completa e confiável 
              com tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors">
                📷
              </a>
              <a href="#" className="w-10 h-10 bg-green-600/20 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                💬
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h5 className="font-semibold text-white text-lg">Serviços</h5>
            <ul className="space-y-3 text-slate-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Seguro Auto</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Seguro Moto</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Assistência 24h</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Guincho Especializado</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Carro Reserva</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h5 className="font-semibold text-white text-lg">Contato</h5>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                0800 123 4567
              </li>
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                contato@protecnow.com
              </li>
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <MapPin className="w-4 h-4" />
                São Paulo, SP
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h5 className="font-semibold text-white text-lg">Newsletter</h5>
            <p className="text-slate-300 text-sm">
              Receba dicas de segurança e ofertas exclusivas
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                →
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} ProtecNow Seguradora. Todos os direitos reservados. 
            <span className="mx-2">•</span>
            Feito com <Heart className="w-4 h-4 inline text-red-400 fill-current" /> para sua segurança
          </p>
        </div>
      </div>
    </footer>
  );
}
