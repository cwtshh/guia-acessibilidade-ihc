const Controles = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Controles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Acesso pelo Teclado
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Garanta que botões, links e outros elementos interativos possam
              ser acessados e operados utilizando apenas o teclado, sem a
              necessidade de um mouse.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Indicador de Foco
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Implemente um indicador visual claro para mostrar quais elementos
              estão em foco ao navegar usando o teclado, como bordas destacadas
              ou mudanças de cor.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Areas Clicáveis Interativas
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Projete controles interativos com áreas clicáveis grandes e bem
              espaçadas, facilitando o uso em dispositivos móveis e para pessoas
              com dificuldades motoras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controles;
