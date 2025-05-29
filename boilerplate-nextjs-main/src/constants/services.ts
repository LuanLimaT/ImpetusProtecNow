import { Service } from "@/types/example";

export const services: Service[] = [
  {
    nome: "Seguro Básico",
    descricao: "Proteção essencial para seu veículo com cobertura fundamental.",
    imagem: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80",
    categoria: "Básico",
    preco: 89.90,
    cobertura: ["Terceiros", "Incêndio", "Roubo e furto", "Guincho 24h"],
  },
  {
    nome: "Seguro Completo",
    descricao: "Cobertura ampla e completa para máxima tranquilidade.",
    imagem: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=400&q=80",
    categoria: "Completo",
    preco: 159.90,
    cobertura: ["Cobertura total", "Carro reserva", "Vidros", "Assistência 24h"],
  },
  {
    nome: "Seguro Premium",
    descricao: "O mais completo seguro com benefícios exclusivos.",
    imagem: "/SeguroPremium.jpg",
    categoria: "Premium",
    preco: 229.90,
    cobertura: ["Tudo incluso", "Concierge", "Proteção total", "Sem franquia"],
  },
  {
    nome: "Seguro Moto",
    descricao: "Proteção especializada para motocicletas e scooters.",
    imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80",
    categoria: "Moto",
    preco: 49.90,
    cobertura: ["Terceiros", "Roubo", "Equipamentos", "Assistência"],
  },
];