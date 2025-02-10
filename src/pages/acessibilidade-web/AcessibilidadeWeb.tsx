import data from "../../json/acessibilidade-web/data.json";
import bg from "../../assets/bg/gradient_2.jpg";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { LuSpeech } from "react-icons/lu";
import web_audio from "../../assets/text-to-speech/v2/acessibilidade-web/acessibilidadeweb.mp3";
import { IoSearch } from "react-icons/io5";
interface Topico {
  titulo: string;
  descricao: string;
  fonte: string;
}

interface Diretriz {
  categoria: string;
  topicos: Topico[];
}

const AcessibilidadeWeb = () => {
  const [diretrizes, setDiretrizes] = useState<Diretriz[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredDiretrizes = diretrizes
    .filter((diretriz) =>
      selectedCategory ? diretriz.categoria === selectedCategory : true
    )
    .map((diretriz) => ({
      ...diretriz,
      topicos: diretriz.topicos.filter(
        (topico) =>
          topico.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          diretriz.categoria.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((diretriz) => diretriz.topicos.length > 0);

  useEffect(() => {
    setDiretrizes(data);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const isDarkTheme = theme === "dark";
  const bgColor = isDarkTheme ? "bg-gray-800" : "bg-white";

  return (
    <div>
      <div
        className="text-white p-6"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Acessibilidade Digital</li>
          </ul>
        </div>
        <h1 className="font-bold text-xl">Acessibilidade Digital</h1>
        <p>
          Acessibilidade digital é o princípio de projetar e desenvolver
          conteúdos e interfaces que possam ser utilizados por todas as pessoas,
          incluindo aquelas com diferentes tipos de deficiências. O objetivo é
          criar experiências inclusivas, garantindo que ninguém seja excluído do
          acesso a informações, serviços e funcionalidades online.
        </p>
        <div className="mt-6">
          <audio ref={audioRef} src={web_audio} />
          <div className="tooltip" data-tip="Texto Para Fala">
            <button
              aria-label="Texto Para Fala - Acessibilidade Digital"
              onClick={togglePlay}
              className="bg-primary-800 p-4 rounded-3xl text-white hover:bg-primary-600 transition-all"
            >
              <LuSpeech className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-5">
        <div className="w-full">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Pesquisar..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IoSearch />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label font-bold">
              <span className="label-text">Categoria</span>
            </div>
            <select
              className="select select-bordered"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option disabled selected>
                Selecionar
              </option>
              <option value="">Todas as categorias</option>
              {[...new Set(diretrizes.map((d) => d.categoria))].map(
                (categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                )
              )}
            </select>
          </label>
        </div>
        {filteredDiretrizes.map((diretriz) => {
          return (
            <div key={diretriz.categoria}>
              <h1 className="font-bold text-xl">
                {diretriz.categoria.toUpperCase()}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {diretriz.topicos.map((topico, index) => {
                  return (
                    <div
                      key={index}
                      className={`card ${bgColor} shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105`}
                    >
                      <div className="flex items-center">
                        <div className="bg-primary-800 p-2 h-full rounded-tl-lg">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox bg-white"
                          />
                        </div>
                        <div
                          className={`p-2 ${
                            theme === "cupcake" ? "bg-gray-200" : ""
                          } w-full h-full rounded-tr-lg`}
                        >
                          <h2
                            className={`card-title text-lg md:text-xl font-semibold ${
                              theme === "dark" ? "text-white" : "text-black"
                            }`}
                          >
                            {topico.titulo}
                          </h2>
                        </div>
                      </div>
                      <div className="card-body">
                        <p
                          className={`md:text-base ${
                            theme === "dark" ? "text-white" : "text-black"
                          }`}
                        >
                          {topico.descricao}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={`${
          theme === "dark" ? "text-white" : "text-black"
        } bg-base-200 p-6 overflow-hidden`}
      >
        <h1 className="font-bold text-xl">Fontes</h1>
        <div className={" flex flex-col gap-4"}>
          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 1.1.1: Non-text
            Content (Level A), Disponível em:{" "}
            <a
              className="text-primary-800"
              href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html
            </a>
          </p>
          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 1.4.5: Images of Text
            (Level AA), Disponível em:{" "}
            <a
              className="text-primary-800"
              href="https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html
            </a>
          </p>
          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 4.1.2: Name, Role,
            Value (Level A), Disponível em:{" "}
            <a
              className="text-primary-800"
              href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html
            </a>
          </p>
          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 1.2.2: Captions
            (Prerecorded) (Level A), Disponível em:{" "}
            <a
              className="text-primary-800"
              href="https://www.w3.org/WAI/WCAG21/Understanding/captions.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/captions.html
            </a>
          </p>
          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 1.2.3: Audio
            Description or Media Alternative (Level A), Disponível em:{" "}
            <a
              className="text-primary-800"
              href="https://www.w3.org/WAI/WCAG21/Understanding/audio-description.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/audio-description.html
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcessibilidadeWeb;
