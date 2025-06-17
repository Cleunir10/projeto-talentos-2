import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Vestido Floral",
    description: "Vestido artesanal com estampa floral, confeccionado em tecido 100% algodão.",
    price: 199.90,
    image: "/images/products/vestido-floral.jpg",
    category: "vestidos",
    artesao: "Maria Silva",
    materiais: ["Algodão", "Linho"],
    tamanhos: ["P", "M", "G"],
    cores: ["Azul", "Rosa", "Verde"],
    stock: 10
  },
  {
    id: 2,
    name: "Bolsa de Crochê",
    description: "Bolsa artesanal feita em crochê com detalhes em miçangas.",
    price: 89.90,
    image: "/images/products/bolsa-croche.jpg",
    category: "acessorios",
    artesao: "Ana Santos",
    materiais: ["Fio de algodão", "Miçangas"],
    tamanhos: ["Único"],
    cores: ["Branco", "Preto", "Vermelho"],
    stock: 15
  },
  {
    id: 3,
    name: "Blusa de Tricô",
    description: "Blusa artesanal feita em tricô com detalhes em renda.",
    price: 159.90,
    image: "/images/products/blusa-trico.jpg",
    category: "blusas",
    artesao: "Joana Lima",
    materiais: ["Lã", "Renda"],
    tamanhos: ["P", "M", "G"],
    cores: ["Cinza", "Bege", "Azul"],
    stock: 8
  }
]; 