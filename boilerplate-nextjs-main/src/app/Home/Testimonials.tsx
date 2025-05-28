// app/(home)/Home/Testimonials.tsx
"use client";
import { MapPin, Star, Heart, TrendingUp, Users } from "lucide-react";
import React from "react";
import { Testimonial } from "@/types/example";

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Silva",
      role: "Empresário",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      content: "Excelente seguro! Quando precisei usar, o atendimento foi rápido e eficiente. Já sou cliente há 5 anos e recomendo a ProtecNow para todos.",
      rating: 5,
      location: "São Paulo, SP"
    },
    {
      id: 2,
      name: "Ana Costa",
      role: "Médica",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      content: "Já sou cliente há 3 anos. A cobertura é completa e o preço muito justo. O app é fantástico e nunca tive problemas com sinistros.",
      rating: 5,
      location: "Rio de Janeiro, RJ"
    },
    {
      id: 3,
      name: "Roberto Santos",
      role: "Advogado",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      content: "Atendimento 24h realmente funciona. Tive um problema de madrugada e fui atendido na hora. Equipe muito profissional!",
      rating: 5,
      location: "Belo Horizonte, MG"
    },
    {
      id: 4,
      name: "Marina Oliveira",
      role: "Arquiteta",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      content: "Migrei de outra seguradora e a diferença é gritante. Aqui o atendimento é humanizado e os valores são transparentes. Super recomendo!",
      rating: 5,
      location: "Curitiba, PR"
    },
    {
      id: 5,
      name: "Pedro Fernandes",
      role: "Engenheiro",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      content: "Processo de cotação super rápido e digital. Em 10 minutos já estava com meu seguro aprovado. Tecnologia de primeiro mundo!",
      rating: 5,
      location: "Brasília, DF"
    },
    {
      id: 6,
      name: "Juliana Mendes",
      role: "Designer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      content: "O que mais me impressiona é a agilidade. Quando bati o carro, em 2 horas já tinha o guincho na porta. Serviço impecável da ProtecNow!",
      rating: 5,
      location: "Salvador, BA"
    },
    {
      id: 7,
      name: "Lucas Rodrigues",
      role: "Contador",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=150&q=80",
      content: "Preço justo e cobertura completa. O carro reserva salvou minha vida quando precisei. Atendimento nota 10 em todos os aspectos!",
      rating: 5,
      location: "Fortaleza, CE"
    },
    {
      id: 8,
      name: "Camila Torres",
      role: "Veterinária",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      content: "Amo a transparência da empresa. Sem pegadinhas ou letra miúda. O que prometem, cumprem. Já indiquei para toda minha família!",
      rating: 5,
      location: "Porto Alegre, RS"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold mb-4">
            DEPOIMENTOS
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">clientes</span> dizem
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Mais de 50.000 clientes satisfeitos comprovam a qualidade dos nossos serviços
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-white/30 group-hover:ring-blue-400/50 transition-all duration-300"
                />
                <div>
                  <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">{testimonial.name}</h4>
                  <p className="text-sm text-blue-200">{testimonial.role}</p>
                  <p className="text-xs text-blue-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 leading-relaxed text-sm">{testimonial.content}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-blue-300">
                <Heart className="w-3 h-3 fill-current" />
                <span>Cliente verificado</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-2xl font-bold text-white">98%</span>
              <span className="text-blue-200">satisfação</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-2xl font-bold text-white">50k+</span>
              <span className="text-blue-200">clientes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
