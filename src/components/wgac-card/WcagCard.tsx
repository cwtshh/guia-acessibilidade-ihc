import React from "react";

interface WcagCardProps {
  diretriz: {
    titulo: string;
    conteudo: string;
    palavras_chave: string[];
  };
}

const WcagCard = ({ diretriz }: WcagCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="bg-primary-700 p-4 rounded-t-lg h-20">
        <h2 className="card-title text-white">{diretriz.titulo}</h2>
      </div>
      <div className="card-body">
        <div className="text-justify h-72 overflow-y-auto flex flex-col gap-4">
          <p>{diretriz.conteudo}</p>
          <p className="font-bold">
            {diretriz.palavras_chave.length > 0 && "Palavras-chave: "}
            {diretriz.palavras_chave.length > 0
              ? diretriz.palavras_chave
                  .map(
                    (palavra) =>
                      palavra.charAt(0).toUpperCase() + palavra.slice(1)
                  )
                  .join(", ")
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WcagCard;
