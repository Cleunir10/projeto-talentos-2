import { Product } from "../types/product";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/produto/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/produto/${product.id}`}>
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2">{product.artesao}</p>
        <p className="text-purple-600 font-bold">R$ {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard; 