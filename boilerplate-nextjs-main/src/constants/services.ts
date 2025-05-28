import { Service } from "@/types/example";

export const services: Service[] = [
  {
    nome: "Seguro Básico",
    descricao: "Proteção essencial para seu veículo com cobertura fundamental e atendimento de qualidade.",
    imagem: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80",
    categoria: "Básico",
    preco: 89.90,
    cobertura: ["Terceiros", "Incêndio", "Roubo e furto", "Guincho 24h"],
  },
  {
    nome: "Proteção Premium",
    descricao: "Cobertura completa e exclusiva.",
    categoria: "Premium",
    preco: 199.90,
    imagem: "/images/protecao-premium.jpg",
    cobertura: [
      "Proteção contra roubo e furto",
      "Assistência 24h completa",
      "Cobertura contra incêndio",
      "Vidros e faróis cobertos",
      "Carro reserva premium"
    ]
  },
  {
    nome: "Proteção Total",
    descricao: "Nosso plano mais completo com cobertura nacional e sem burocracia.",
    imagem: "https://images.unsplash.com/photo-1605034343210-24dd57ce0f58?auto=format&fit=crop&w=400&q=80",
    categoria: "Total",
    preco: 259.90,
    cobertura: [
      "Cobertura nacional",
      "Sem análise de perfil",
      "Carro reserva ilimitado",
      "Cobertura de terceiros ampliada"
    ]
  },
  {
    nome: "Plano Econômico",
    descricao: "Ideal para quem quer proteção com um excelente custo-benefício.",
    imagem: "https://images.unsplash.com/photo-1597007517935-81c17a6fe245?auto=format&fit=crop&w=400&q=80",
    categoria: "Econômico",
    preco: 69.90,
    cobertura: [
      "Cobertura contra roubo",
      "Guincho 100 km",
      "Assistência básica",
      "App de acompanhamento"
    ]
  }
];