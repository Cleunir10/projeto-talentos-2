import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useUser } from "../hooks/useUser";

const Header = () => {
  const { cart } = useCart();
  const { user } = useUser();

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            Talentos
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/shop"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Loja
            </Link>
            <Link
              to="/artesaos"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Artesãs
            </Link>
            <Link
              to="/sobre"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Sobre
            </Link>
            <Link
              to="/contato"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Contato
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <Link
                to="/user-profile"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Minha Conta
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Entrar
              </Link>
            )}
            <Link
              to="/cart"
              className="relative text-gray-600 hover:text-purple-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
