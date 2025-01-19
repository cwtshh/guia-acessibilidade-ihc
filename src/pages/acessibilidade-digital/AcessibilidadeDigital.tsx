import React from "react";
import acessbilidade from "../../assets/acessibilidade/image.png";

const AcessibilidadeDigital = () => {
  return (
    <div>
      <div className="flex  gap-4 p-6">
        <img
          className="w-72"
          src={acessbilidade}
          alt="Guia de Boas Práticas Para Acessibilidade Digital"
        />
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-xl">
            Guia de Boas Práticas para Acessibilidade Digital
          </h1>
          <p className="text-justify">
            O "Guia de Boas Práticas para Acessibilidade Digital", trata de
            diretrizes, conceitos e orientações práticas para promover
            acessibilidade digital em websites, aplicativos e outros ambientes
            digitais. Ele é voltado especialmente para garantir a inclusão de
            pessoas com deficiência e outros públicos que enfrentam barreiras no
            uso de tecnologias digitais.
          </p>
          <p>
            O guia foi produzido em parceria entre o Reino Unido e o Brasil,
            como parte do Programa de Cooperação em Acesso Digital (Digital
            Access Programme – DAP)
          </p>
        </div>
      </div>

      <div className="p-6">
        <h1 className="font-bold text-xl">
          Checklist para Boas Práticas de Acessibilidade Digital
        </h1>
      </div>
    </div>
  );
};

export default AcessibilidadeDigital;
