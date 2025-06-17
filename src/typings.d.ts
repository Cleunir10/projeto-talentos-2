export interface Product {
  id: string;
  title: string;
  image: string;
  category: string;
  price: number;
  popularity: number;
  stock: number;
  description: string;
  artesao: string;
  materiais: string[];
  tamanhos: string[];
  cores: string[];
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
}
