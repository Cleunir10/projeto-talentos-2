import { Link } from "react-router-dom";
import HomeCollectionSection from "../components/HomeCollectionSection";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Talentos: Empoderando Mulheres Através da Costura
            </h1>
            <p className="text-xl mb-8">
              Transformando habilidades manuais em oportunidades de renda sustentável
            </p>
            <Link
              to="/shop"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Explorar Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Missão Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-2xl font-semibold mb-4">Capacitação</h3>
              <p className="text-gray-600">
                Oferecemos cursos e treinamentos em corte e costura para mulheres que desejam desenvolver suas habilidades
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-2xl font-semibold mb-4">Sustentabilidade</h3>
              <p className="text-gray-600">
                Promovemos o reaproveitamento de materiais têxteis, contribuindo para um futuro mais sustentável
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-2xl font-semibold mb-4">Empreendedorismo</h3>
              <p className="text-gray-600">
                Apoiamos costureiras autônomas a transformarem seu talento em uma fonte de renda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <HomeCollectionSection />

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Faça Parte Desta Transformação
          </h2>
          <p className="text-xl mb-8">
            Seja você uma costureira talentosa ou alguém que valoriza produtos únicos e sustentáveis
          </p>
          <div className="space-x-4">
            <Link
              to="/register"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Cadastre-se
            </Link>
            <Link
              to="/shop"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all"
            >
              Ver Produtos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
