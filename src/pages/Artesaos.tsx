import { Artesao } from "../typings.d";

const Artesaos = () => {
  // Aqui você pode buscar os dados das artesãs do seu backend
  const artesaos: Artesao[] = [
    {
      id: "1",
      nome: "Maria Silva",
      especialidade: "Vestidos",
      historia: "Costureira há 15 anos, especialista em reaproveitamento de tecidos",
      produtos: ["1"],
    },
    {
      id: "2",
      nome: "Ana Oliveira",
      especialidade: "Bordados",
      historia: "Bordadeira tradicional, preservando técnicas ancestrais",
      produtos: ["2"],
    },
    {
      id: "3",
      nome: "Carla Santos",
      especialidade: "Acessórios",
      historia: "Especialista em upcycling de materiais têxteis",
      produtos: ["3"],
    },
    {
      id: "4",
      nome: "Juliana Costa",
      especialidade: "Conjuntos",
      historia: "Designer de moda sustentável",
      produtos: ["4"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Nossas Artesãs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artesaos.map((artesao) => (
            <div
              key={artesao.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-purple-600">
                  {artesao.nome}
                </h3>
                <p className="text-gray-600 mb-2">
                  Especialidade: {artesao.especialidade}
                </p>
                <p className="text-gray-500 text-sm">{artesao.historia}</p>
              </div>
              <div className="bg-purple-50 px-6 py-4">
                <a
                  href={`/shop?artesao=${artesao.id}`}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Ver produtos →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artesaos; 