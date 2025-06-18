import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { setShowingProducts, setTotalProducts } from "../features/shop/shopSlice";
import { products } from "../data/products";
import { Product } from "../typings.d";

interface ProductGridProps {
  products: Product[];
}

const ProductGridWrapper = ({
  searchQuery,
  sortCriteria,
  category,
  page,
  limit,
  featured,
  children,
}: {
  searchQuery?: string;
  sortCriteria?: string;
  category?: string;
  page?: number;
  limit?: number;
  featured?: boolean;
  children: ReactElement<ProductGridProps> | ReactElement<ProductGridProps>[];
}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const dispatch = useAppDispatch();

  const filterAndSortProducts = useCallback(() => {
    let result = [...products];

    // Filtrar por categoria
    if (category) {
      result = result.filter((product) => product.category === category);
    }

    // Filtrar por busca
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.artesao.toLowerCase().includes(query)
      );
    }

    // Filtrar por destaque
    if (featured) {
      result = result.filter((product) => product.featured);
    }

    // Ordenar produtos
    if (sortCriteria === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortCriteria === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    // Atualizar total de produtos
    dispatch(setTotalProducts(result.length));

    // Aplicar paginação
    if (limit) {
      result = result.slice(0, limit);
    } else if (page) {
      const startIndex = (page - 1) * 9;
      result = result.slice(startIndex, startIndex + 9);
    }

    setFilteredProducts(result);
    dispatch(setShowingProducts(result.length));
  }, [category, searchQuery, sortCriteria, page, limit, featured, dispatch]);

  useEffect(() => {
    filterAndSortProducts();
  }, [filterAndSortProducts]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && filteredProducts.length > 0) {
      return React.cloneElement(child, { products: filteredProducts });
    }
    return null;
  });

  return childrenWithProps;
};

export default ProductGridWrapper;
