const Sobre = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Sobre o Projeto Talentos
        </h1>

        <div className="max-w-3xl mx-auto space-y-8">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">
              Nossa Missão
            </h2>
            <p className="text-gray-600 leading-relaxed">
              O projeto Talentos visa empoderar mulheres, em especial costureiras
              autônomas, transformando habilidades manuais em fontes de renda
              sustentável. Nossa solução combina capacitação em corte e costura,
              reaproveitamento de materiais têxteis descartados e criação de uma
              plataforma de e-commerce aprimorada.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Empoderamento</h3>
                <p className="text-gray-600">
                  Acreditamos no poder transformador do trabalho e da
                  independência financeira para as mulheres.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Sustentabilidade</h3>
                <p className="text-gray-600">
                  Promovemos práticas sustentáveis através do reaproveitamento de
                  materiais têxteis.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Comunidade</h3>
                <p className="text-gray-600">
                  Construímos uma rede de apoio e colaboração entre artesãs e
                  consumidores conscientes.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">
              Como Funciona
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Capacitação</h3>
                  <p className="text-gray-600">
                    Oferecemos cursos e treinamentos em corte e costura para
                    mulheres que desejam desenvolver suas habilidades.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Produção</h3>
                  <p className="text-gray-600">
                    As artesãs produzem peças únicas utilizando materiais
                    reaproveitados e técnicas sustentáveis.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  3
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Comercialização</h3>
                  <p className="text-gray-600">
                    Nossa plataforma conecta as artesãs diretamente aos
                    consumidores, garantindo uma renda justa.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">
              Impacto Social
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Através do projeto Talentos, já impactamos positivamente a vida de
              dezenas de mulheres, proporcionando não apenas uma fonte de renda,
              mas também um espaço para desenvolvimento pessoal e profissional.
              Nossa meta é expandir esse impacto, alcançando mais mulheres e
              criando uma rede cada vez maior de artesãs empoderadas.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sobre; 