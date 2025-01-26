const Videos = () => {
  return (
    <div>
      <h1 className="font-bold">Vídeos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Vídeos com Legendas
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Disponibilize legendas sincronizadas para todo o conteúdo de
              vídeo, garantindo que todas as informações auditivas estejam
              acessíveis a pessoas surdas ou com perda auditiva.
            </p>
            <p className="">[3]</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Transcrição de Vídeos
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Ofereça transcrições textuais completas de vídeos, descrevendo
              tanto o áudio quanto elementos visuais importantes, para atender a
              diferentes necessidades de acessibilidade.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="bg-primary-800 p-4 h-24 rounded-t-lg text-white">
            <h2 className="card-title text-lg md:text-xl font-semibold">
              Controles de Vídeo Acessíveis
            </h2>
          </div>
          <div className="card-body">
            <p className=" md:text-base text-gray-700">
              Inclua controles acessíveis e intuitivos para reprodução, pausa,
              ajuste de volume e avanço/retrocesso, permitindo que todos os
              usuários interajam com o conteúdo de vídeo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
