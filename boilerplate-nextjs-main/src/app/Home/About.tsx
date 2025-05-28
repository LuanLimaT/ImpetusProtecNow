// app/(home)/Home/About.tsx
"use client";
import { Shield, Users, Award, Clock } from "lucide-react";
import React from "react";

export default function About() {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Proteção Completa",
      description: "Cobertura ampla para todas as situações do dia a dia",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Atendimento 24h",
      description: "Suporte especializado a qualquer hora do dia",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Award className="w-12 h-12 text-green-600" />,
      title: "Qualidade Garantida",
      description: "Mais de 20 anos de experiência no mercado",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "Agilidade",
      description: "Cotação e aprovação em poucos minutos",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-4">
            SOBRE A PROTECNOW
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Inovação e <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Confiança</span>
          </h3>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Somos uma seguradora especializada em proteção veicular, oferecendo soluções personalizadas 
            com tecnologia de ponta para garantir sua tranquilidade no trânsito.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center p-8 rounded-3xl bg-white/80 backdrop-blur-md border border-white/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className={`flex justify-center mb-6 p-4 rounded-2xl bg-gradient-to-r ${feature.color} w-fit mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
