import React from "react";

const Contato: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Entre em Contato
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6 text-purple-600">
                Informações de Contato
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Endereço</h3>
                  <p className="text-gray-600">
                    Rua das Artesãs, 123<br />
                    São Paulo, SP<br />
                    CEP: 01234-567
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Telefone</h3>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Email</h3>
                  <p className="text-gray-600">contato@talentos.com.br</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-600">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6 text-purple-600">
                Envie uma Mensagem
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato; 