import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import heuristicas_data from "../../json/heuristicas/data.json";
import HeuristicaCard from "../../components/heuristica-card/HeuristicaCard";
import bg from "../../assets/bg/gradient_2.jpg";

interface Heuristica {
  name: string;
  content: string;
  num: number;
}

const Heuristicas = () => {
  const [heuristicas, setHeuristicas] = useState<Heuristica[]>([]);
  const [filteredHeuristicas, setFilteredHeuristicas] = useState<Heuristica[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setHeuristicas(heuristicas_data);
  }, []);

  useEffect(() => {
    const filtered = heuristicas.filter(
      (heuristica) =>
        heuristica.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        heuristica.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHeuristicas(filtered);
  }, [searchTerm, heuristicas]);

  return (
    <div className="flex flex-col gap-8">
      <div
        className="p-6 h-auto md:h-64 flex items-center text-white"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="w-full md:w-2/3">
          <p className="text-lg md:text-xl font-bold leading-relaxed">
            “Even the best designers produce successful products only if their
            designs solve the right problems. A wonderful interface to the wrong
            features will fail.”
          </p>
          <p className="italic mt-2 text-sm md:text-base">– Jakob Nielsen</p>
        </div>
      </div>

      <div className="px-6">
        <p className="text-sm md:text-lg leading-relaxed">
          As 10 heurísticas de Nielsen são um conjunto de princípios gerais para
          o design de interfaces de usuário, criados por Jakob Nielsen em 1994.
          Essas heurísticas ajudam a identificar problemas de usabilidade em
          sistemas interativos e são amplamente utilizadas na avaliação
          heurística de interfaces. Elas não são regras rígidas, mas diretrizes
          que promovem uma experiência do usuário mais intuitiva e eficiente.
        </p>
      </div>

      <div className="flex flex-col gap-6 px-6">
        <h1 className="font-bold text-xl md:text-2xl">
          As 10 Heurísticas de Nielsen
        </h1>

        <label className="input input-bordered flex items-center gap-2 p-2 bg-white rounded-full shadow-sm">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            className="grow focus:outline-none text-sm md:text-base"
            placeholder="Procure por uma Heurística Específica..."
          />
          <FaSearch className="text-gray-500" />
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHeuristicas.map((heuristica, index: number) => (
            <HeuristicaCard key={index} heuristica={heuristica} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heuristicas;
