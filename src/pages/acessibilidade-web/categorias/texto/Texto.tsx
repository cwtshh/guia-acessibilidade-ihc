const Texto = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Texto</h1>

      <div>
        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Tamanho de Fonte
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Garanta um tamanho mínimo de 16px para textos principais.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Contraste
            </h2>
          </div>
          <div className="card-body">
            <p className="md:text-base text-gray-700">
              Assegure uma relação de contraste de pelo menos{" "}
              <strong>4.5:1</strong> entre texto e fundo.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Espaçamento
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Assegure uma relação de contraste de pelo menos{" "}
              <strong>4.5:1</strong> entre texto e fundo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Texto;
