import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Talentos</h3>
            <p className="text-gray-400">
              Empoderando mulheres através da costura e do artesanato sustentável.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white">
                  Loja
                </Link>
              </li>
              <li>
                <Link to="/artesaos" className="text-gray-400 hover:text-white">
                  Artesãs
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop/vestidos" className="text-gray-400 hover:text-white">
                  Vestidos
                </Link>
              </li>
              <li>
                <Link to="/shop/blusas" className="text-gray-400 hover:text-white">
                  Blusas
                </Link>
              </li>
              <li>
                <Link to="/shop/acessorios" className="text-gray-400 hover:text-white">
                  Acessórios
                </Link>
              </li>
              <li>
                <Link to="/shop/conjuntos" className="text-gray-400 hover:text-white">
                  Conjuntos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contato@talentos.com.br</li>
              <li>Telefone: (11) 99999-9999</li>
              <li>Endereço: São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Talentos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
