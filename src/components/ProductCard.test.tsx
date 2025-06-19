import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import ProductCard from './ProductCard';
import { MemoryRouter } from 'react-router-dom';

const mockProduct = {
  id: 1,
  name: 'Produto Teste',
  price: 99.99,
  image: 'test-image.jpg',
  description: 'Descrição do produto teste',
  category: 'teste',
  rating: 4.5,
  numReviews: 10,
  countInStock: 5,
  artesao: 'Artesão Teste',
  materiais: ['Material 1', 'Material 2'],
  tamanhos: ['P', 'M', 'G'],
  cores: ['Vermelho', 'Azul'],
  peso: 1.5,
  dimensoes: '10x20x30'
};

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

describe('ProductCard', () => {
  it('deve renderizar o produto corretamente', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductCard product={mockProduct} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Produto Teste')).toBeInTheDocument();
    expect(screen.getByText('Artesão Teste')).toBeInTheDocument();
    expect(screen.getByText('R$ 99.99')).toBeInTheDocument();
  });
}); 