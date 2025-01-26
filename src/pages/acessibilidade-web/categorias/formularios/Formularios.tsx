import React from "react";

const Formularios = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Formulários</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Rótulos Descritivos
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Associe rótulos descritivos a todos os campos de formulário usando
              o atributo 'label' ou técnicas semânticas apropriadas, facilitando
              o uso por leitores de tela.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Mensagens de Erro Claras
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Forneça mensagens de erro claras e específicas quando o usuário
              preencher um campo incorretamente, indicando qual é o problema e
              como corrigi-lo.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Ordem Lógica de Tabulação
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Organize os campos de formulário em uma ordem lógica e permita que
              os usuários naveguem facilmente usando o teclado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formularios;
