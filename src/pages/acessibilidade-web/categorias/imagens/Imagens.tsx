import React from "react";

const Imagens = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Imagens</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Texto alternativo em imagens
            </h2>
          </div>
          <div className="card-body">
            <p className="md:text-base text-gray-700">
              Inclua texto alternativo significativo em todas as imagens,
              descrevendo seu conteúdo ou função. Para imagens decorativas, use
              um texto alternativo vazio{" "}
              <code className="bg-slate-500 p-2  text-white rounded-2xl">
                (alt='')
              </code>
              .
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Texto sobre imagens
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Evite utilizar imagens que contenham texto sempre que possível.
              Caso seja necessário, garanta que o texto na imagem também seja
              fornecido como texto acessível no código.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Texto sobre imagens
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Para imagens complexas, como gráficos, diagramas ou mapas, forneça
              descrições detalhadas em texto que expliquem completamente o
              significado ou os dados apresentados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagens;
