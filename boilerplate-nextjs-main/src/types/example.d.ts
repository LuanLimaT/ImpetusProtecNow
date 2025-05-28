export interface Service {
  nome: string;
  descricao: string;
  imagem: string;
  categoria: string;
  preco: number;
  cobertura: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  location: string;
}
