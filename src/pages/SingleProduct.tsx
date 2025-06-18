import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToTheCart } from "../features/cart/cartSlice";
import { Product } from "../typings.d";
import { products } from "../data/products";
import toast from "react-hot-toast";

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === Number(id));
    setProduct(foundProduct || null);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addProductToTheCart({ ...product, quantity }));
      toast.success(`${quantity} ${product.name}${quantity > 1 ? 's' : ''} adicionado${quantity > 1 ? 's' : ''} ao carrinho!`, {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#9333ea",
          color: "#fff",
        },
      });
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= (product?.stock || 1)) {
      setQuantity(value);
    }
  };

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-purple-600 mb-4">
            R$ {product.price.toFixed(2)}
          </p>
          <div className="flex items-center gap-4 mb-6">
            <label htmlFor="quantity" className="text-gray-700 font-medium">
              Quantidade:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={handleQuantityChange}
              className="w-20 h-10 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <span className="text-sm text-gray-500">
              {product.stock} disponível{product.stock > 1 ? 'is' : ''}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
