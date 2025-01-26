const Semantica = () => {
  return (
    <div>
      <h1 className="font-bold text-xl">Semântica</h1>

      <div className="flex flex-wrap gap-4 mt-4">
        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Elementos HTML semânticos
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Use tags como{" "}
              <code className="bg-slate-500 text-white p-1 rounded-xl shadow-lg">
                {"<header>"}
              </code>
              ,{" "}
              <code className="bg-slate-500 text-white p-1 rounded-xl shadow-lg">
                {"<footer>"}
              </code>
              ,{" "}
              <code className="bg-slate-500 text-white p-1 rounded-xl shadow-lg">
                {"<main>"}
              </code>{" "}
              para estruturar o conteúdo da página.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Estrutura Hierárquica
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Organize títulos sequencialmente com{" "}
              <code className="bg-slate-500 text-white p-1 rounded-xl shadow-lg">
                {"<h1>"}
              </code>{" "}
              a
              <code className="bg-slate-500 text-white p-1 rounded-xl shadow-lg">
                {"<h6>"}
              </code>
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Role Landmark Regions
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Identifique regiões importantes da página com ARIA landmarks{" "}
              <code className="bg-slate-500 text-white p-1 rounded-xl shadow-lg">
                role="banner"
              </code>{" "}
              <code className="bg-slate-500 text-white p-1 rounded-xl shadow-lg">
                role="navigation"
              </code>{" "}
              etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Semantica;
