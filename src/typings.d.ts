export interface Product {
  id: number;
  name: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  artesao: string;
  materiais: string[];
  tamanhos: string[];
  cores: string[];
  stock: number;
  featured?: boolean;
  popularity?: number;
  quantity?: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Artesao {
  id: string;
  nome: string;
  especialidade: string;
  historia: string;
  produtos: string[];
}

export interface Order {
  id: string;
  data: {
    emailAddress: string;
    firstName: string;
    lastName: string;
    company?: string;
    address: string;
    apartment?: string;
    city: string;
    country: string;
    region: string;
    postalCode: string;
    phone: string;
    paymentType: string;
    cardNumber: string;
    nameOnCard: string;
    expirationDate: string;
    cvc: string;
  };
  products: Product[];
  subtotal: number;
  user: {
    email: string;
    id: number;
  };
  orderStatus?: string;
  orderDate?: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
  confirmPassword: string;
  name?: string;
  lastname?: string;
}
