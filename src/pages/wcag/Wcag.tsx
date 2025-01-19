import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import diretrizes_data from "../../json/wcag/data.json";
import WcagCard from "../../components/wgac-card/WcagCard";

interface Diretrizes {
  titulo: string;
  conteudo: string;
}

const Wcag = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [diretrizes, setDiretrizes] = useState<Diretrizes[]>([]);
  const [filteredDiretrizes, setFilteredDiretrizes] = useState<Diretrizes[]>(
    []
  );

  useEffect(() => {
    setDiretrizes(diretrizes_data);
  }, []);

  // TODO - MELHORAR PESQUISA
  useEffect(() => {
    const filtered = diretrizes.filter(
      (diretriz) =>
        diretriz.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        diretriz.conteudo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDiretrizes(filtered);
  }, [searchTerm, diretrizes]);

  // useEffect(() => {
  //   const filtered = heuristicas.filter(
  //     (heuristica) =>
  //       heuristica.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       heuristica.content.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredHeuristicas(filtered);
  // }, [searchTerm, heuristicas]);

  return (
    <div className="p-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">WCAG</h1>
        <p className="text-justify">
          A WCAG (Web Content Accessibility Guidelines), ou Diretrizes de
          Acessibilidade para Conteúdo Web, são um conjunto de normas
          internacionais desenvolvidas pelo W3C (World Wide Web Consortium) para
          garantir que sites, aplicações e outros conteúdos digitais sejam
          acessíveis para pessoas com deficiência. Essas diretrizes são
          amplamente adotadas para promover a inclusão digital e melhorar a
          experiência de uso de pessoas com diferentes tipos de limitações, como
          deficiência visual, auditiva, motora, cognitiva, entre outras.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <h1 className="font-bold text-xl">Níveis de Conformidade</h1>
        <p>A WCAG possui três níveis de conformidade:</p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Nível A:</strong> Requisitos básicos de acessibilidade, que
            são essenciais para o funcionamento mínimo do conteúdo.
          </li>
          <li>
            <strong>Nível AA:</strong> Considerado o nível médio de conformidade
            e geralmente adotado como padrão legal em muitos países. Ele aborda
            aspectos que melhoram a acessibilidade sem comprometer o design.
          </li>
          <li>
            <strong>Nível AAA:</strong> Nível mais alto de acessibilidade,
            exigindo requisitos mais rigorosos, mas que nem sempre são
            aplicáveis a todos os tipos de conteúdo.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <h1 className="font-bold text-xl">Diretrizes</h1>

        <label className="input input-bordered flex items-center gap-2 p-2 bg-white rounded-md shadow-sm">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            className="grow focus:outline-none text-sm md:text-base"
            placeholder="Use este campo para filtrar as diretrizes..."
          />
          <FaSearch className="text-gray-500" />
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredDiretrizes.map((diretriz, index) => {
            return <WcagCard key={index} diretriz={diretriz} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Wcag;
