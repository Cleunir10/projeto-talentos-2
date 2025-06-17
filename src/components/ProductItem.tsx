import { Link } from "react-router-dom";
import { Product } from "../typings.d";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const {
    id,
    title,
    image,
    price,
    artesao,
    materiais,
    description,
  } = product;

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/product/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{artesao}</p>
          <p className="mt-1 text-sm text-gray-500">
            Materiais: {materiais.join(", ")}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          R$ {price.toFixed(2)}
        </p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
