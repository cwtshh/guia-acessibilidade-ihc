import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import diretrizes_data from "../../json/wcag/topicos_2.json";
import WcagCard from "../../components/wgac-card/WcagCard";
import bg from "../../assets/bg/gradient_2.jpg";
import { LuSpeech } from "react-icons/lu";
interface Diretrizes {
  titulo: string;
  conteudo: string;
  palavras_chave: string[];
}

const Wcag = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [diretrizes, setDiretrizes] = useState<Diretrizes[]>([]);
  const [filteredDiretrizes, setFilteredDiretrizes] = useState<Diretrizes[]>(
    []
  );
  const [nivelConformidade, setNivelConformidade] = useState<string | null>(
    null
  );
  const [isPLoading, setIsPLoading] = useState<boolean>(true);
  const audioref = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPLoading) {
      audioref.current?.pause();
    } else {
      audioref.current?.play();
    }
    setIsPLoading(!isPLoading);
  };

  useEffect(() => {
    setDiretrizes(diretrizes_data);
  }, []);

  useEffect(() => {
    const filtered = diretrizes.filter((diretriz) => {
      const nivel = diretriz.titulo.match(/\[([A-Za-z]+)\]/)?.[1]; // Extrai o nível de conformidade entre colchetes, como [A]

      return (
        // Filtra pelo título, conteúdo ou palavras-chave
        (diretriz.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          diretriz.conteudo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          diretriz.palavras_chave.some((palavra) =>
            palavra.toLowerCase().includes(searchTerm.toLowerCase())
          )) &&
        // Filtra pelo nível de conformidade, se um for selecionado
        (nivelConformidade ? nivel === nivelConformidade : true)
      );
    });
    setFilteredDiretrizes(filtered);
  }, [searchTerm, diretrizes, nivelConformidade]); // Dependência inclui nivelConformidade agora

  return (
    <div>
      <div
        className="p-6 h-auto md:h-64 flex items-center text-white"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div>
          <p className="italic font-bold text-xl">
            "Strategies, standards, resources to make the Web accessible to
            people with disabilities."
          </p>
          <p>- W3C</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-6">
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

      <div className="mt-8 flex flex-col gap-4 p-6">
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

        <div>
          <audio ref={audioref} src="src/text-to-speech/wcag/wcag_desc.mp3" />
          <div className="tooltip" data-tip="Texto Para Fala">
            <button
              onClick={togglePlay}
              className="bg-primary-800 p-4 rounded-3xl text-white hover:bg-primary-600 transition-all"
            >
              <LuSpeech className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-8 p-6">
        <h1 className="font-bold text-xl">Diretrizes</h1>

        <div className="flex items-center gap-4">
          {/* Campo de pesquisa */}
          <label className="input flex items-center gap-2 p-2 bg-white rounded-full shadow-sm grow">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              className="w-full focus:outline-none text-sm md:text-base"
              placeholder="Use este campo para filtrar as diretrizes..."
            />
            <FaSearch className="text-gray-500" />
          </label>

          {/* Select para Nível de Conformidade */}
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              onChange={(e) => setNivelConformidade(e.target.value || null)} // Atualiza o filtro de nível
            >
              <option disabled selected>
                Nível de Conformidade
              </option>
              <option value="A">A</option>
              <option value="AA">AA</option>
              <option value="AAA">AAA</option>
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredDiretrizes.map((diretriz, index) => (
            <WcagCard key={index} diretriz={diretriz} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wcag;
