
"use client";

import React from "react";
import { useState } from "react";
// Ícones do Lucide
import { ShoppingCart, Star, Shield, Users, Award, Clock, CheckCircle, Phone, Mail, MapPin, Heart, Zap, TrendingUp } from "lucide-react";

// Tipos de serviço e depoimento
interface Service {
  nome: string;
  descricao: string;
  imagem: string;
  categoria: string;
  preco: number;
  cobertura: string[];
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  location: string;
}

// COMPONENTES INTERNOS

function Hero() {
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

function About() {
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

function Services({ services, onServiceBuy }: { services: Service[], onServiceBuy: (service: Service) => void }) {
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
                    {service.cobertura.slice(0, 3).map((item, index) => (
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

function Testimonials() {
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

function Footer() {
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

// FLOATING CHAT MELHORADO
function FloatingChat() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Olá! Bem-vindo à ProtecNow. Sou a Luna, sua assistente virtual. Como posso ajudar você hoje?",
      isUser: false,
      timestamp: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  function getCurrentTime() {
    return new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function addMessage(text: string, isUser: boolean) {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        text,
        isUser,
        timestamp: getCurrentTime(),
      },
    ]);
  }

  function handleSend() {
    if (inputValue.trim() === "") return;
    addMessage(inputValue.trim(), true);
    setInputValue("");
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "Perfeito! Nossa equipe especializada irá entrar em contato em até 5 minutos. 📞",
        "Ótima pergunta! Vou conectar você com um especialista para te dar todas as informações. ⚡",
        "Entendi! Vou buscar as melhores opções para seu perfil. Em instantes você terá uma resposta! 🎯"
      ];
      addMessage(responses[Math.floor(Math.random() * responses.length)], false);
    }, 2000);
  }

  return (
    <>
      <button
        onClick={() => setChatOpen((open) => !open)}
        aria-label={chatOpen ? "Fechar chat" : "Abrir chat"}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full w-16 h-16 shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 pulse"
      >
        {chatOpen ? "✕" : "💬"}
      </button>
      
      {chatOpen && (
        <div className="fixed bottom-28 right-6 z-50 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl w-80 h-96 flex flex-col border border-white/50">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-3xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                🤖
              </div>
              <div>
                <h4 className="font-semibold">Luna - Assistente ProtecNow</h4>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Online agora
                </p>
              </div>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-br from-slate-50 to-blue-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block p-3 rounded-2xl max-w-xs shadow-lg ${
                    message.isUser
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white text-slate-800 border border-slate-200'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-2 ${message.isUser ? 'text-blue-100' : 'text-slate-500'}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-2xl max-w-xs bg-white border border-slate-200 shadow-lg">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-200"></div>
                    <span className="text-slate-500 text-sm ml-2">Luna está digitando...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Input */}
          <div className="p-4 border-t border-slate-200 bg-white/80 backdrop-blur-md rounded-b-3xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-3 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white/80"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl transition-all transform hover:scale-105"
              >
                ✈️
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// CHECKOUT MODAL MELHORADO
function CheckoutModal({ isOpen, onClose, service }: { isOpen: boolean, onClose: () => void, service: Service | null }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    cartao: "",
    validade: "",
    cvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria a integração com o pagamento
    alert("🎉 Contratação realizada com sucesso! Você receberá um email de confirmação em instantes.");
    onClose();
  };

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Finalizar Contratação</h2>
              <p className="text-blue-100 text-sm">Últimos passos para sua proteção</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-blue-200 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-all"
            >
              ✕
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {/* Resumo do Produto Melhorado */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl mb-6 border border-blue-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">{service.nome}</h3>
                <p className="text-slate-600 text-sm">{service.descricao}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  R$ {service.preco.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-slate-500 text-sm">/mês</span>
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                🔒 Seguro e Protegido
              </div>
            </div>
          </div>

          {/* Formulário Melhorado */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Dados Pessoais
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Digite seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    CPF
                  </label>
                  <input
                    type="text"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="000.000.000-00"
                  />
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                💳 Dados do Cartão
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Número do Cartão
                  </label>
                  <input
                    type="text"
                    name="cartao"
                    value={formData.cartao}
                    onChange={handleInputChange}
                    placeholder="0000 0000 0000 0000"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Validade
                  </label>
                  <input
                    type="text"
                    name="validade"
                    value={formData.validade}
                    onChange={handleInputChange}
                    placeholder="MM/AA"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="000"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-slate-200 text-slate-800 py-4 rounded-xl font-semibold hover:bg-slate-300 transition-all"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 Finalizar Contratação
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// COMPONENTE PRINCIPAL
export default function Index() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const services: Service[] = [
    {
      nome: "Seguro Básico",
      descricao: "Proteção essencial para seu veículo com cobertura fundamental e atendimento de qualidade.",
      imagem: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80",
      categoria: "Básico",
      preco: 89.90,
      cobertura: ["Terceiros", "Incêndio", "Roubo e furto", "Guincho 24h"],
    },
    {
      nome: "Seguro Completo",
      descricao: "Cobertura ampla e completa para máxima tranquilidade no seu dia a dia.",
      imagem: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=400&q=80",
      categoria: "Completo",
      preco: 159.90,
      cobertura: ["Cobertura total", "Carro reserva", "Vidros", "Assistência 24h"],
    },
    {
      nome: "Seguro Premium",
      descricao: "O mais completo seguro com benefícios exclusivos e atendimento VIP.",
      imagem: "https://images.unsplash.com/photo-1549399936-d8080a7dbf74?auto=format&fit=crop&w=400&q=80",
      categoria: "Premium",
      preco: 229.90,
      cobertura: ["Tudo incluso", "Concierge", "Proteção total", "Sem franquia"],
    },
    {
      nome: "Seguro Moto",
      descricao: "Proteção especializada para motocicletas e scooters com cobertura específica.",
      imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
      categoria: "Moto",
      preco: 49.90,
      cobertura: ["Terceiros", "Roubo", "Equipamentos", "Assistência"],
    },
  ];

  const handleServiceBuy = (service: Service) => {
    setSelectedService(service);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Melhorado */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ProtecNow</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#sobre" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Sobre
              </a>
              <a href="#servicos" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Planos
              </a>
              <a href="#depoimentos" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Depoimentos
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-semibold shadow-lg">
                Cotação Grátis
              </button>
            </nav>
          </div>
        </div>
      </header>

      <Hero />
      <About />
      <Services services={services} onServiceBuy={handleServiceBuy} />
      <Testimonials />
      <Footer />
      <FloatingChat />
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        service={selectedService}
      />
    </div>
  );
}