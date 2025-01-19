import React from "react";

interface WcagCardProps {
  diretriz: {
    titulo: string;
    conteudo: string;
  };
}

const WcagCard = ({ diretriz }: WcagCardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="card-body">
        <h2 className="card-title">{diretriz.titulo}</h2>
        <div className="text-justify h-72 overflow-y-auto">
          <p>{diretriz.conteudo}</p>
        </div>
      </div>
    </div>
  );
};

export default WcagCard;
