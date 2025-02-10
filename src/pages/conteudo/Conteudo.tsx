import bg from "../../assets/bg/gradient_2.jpg";
import { Link } from "react-router-dom";
import data from "../../json/conteudo/data.json";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import conteudo from "../../assets/text-to-speech/v2/conteudo/conteudo.mp3";
import { LuSpeech } from "react-icons/lu";

interface Topico {
  descricao: string;
  fonte: string;
}

interface Diretriz {
  categoria: string;
  topicos: Topico[];
}

const Conteudo = () => {
  const [topicos, setTipocos] = useState<Diretriz>();
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    setTipocos(data);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isDarkTheme = theme === "dark";
  const bgColor = isDarkTheme ? "bg-gray-800" : "bg-white";
  const textColor = isDarkTheme ? "text-gray-200" : "text-gray-800";

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
            <li>Acessibilidade</li>
            <li>Conteúdo</li>
          </ul>
        </div>
        <h1 className="font-bold text-xl">Acessibilidade de Conteúdo</h1>
        <p>
          A "Acessibilidade de Conteúdo" garante que todos os usuários,
          independentemente de suas habilidades, possam acessar e compreender o
          conteúdo digital. Isso inclui práticas como o uso de texto alternativo
          em imagens, bom contraste entre texto e fundo, legendas para vídeos,
          navegação clara, formulários acessíveis e feedback para erros. A ideia
          é criar uma experiência inclusiva e fácil de usar para todos.
        </p>

        <div className="mt-6">
          <audio ref={audioRef} src={conteudo} />
          <div className="tooltip" data-tip="Texto Para Fala">
            <button
              aria-label="Texto Para Fala - Acessibilidade de Conteúdo"
              onClick={togglePlay}
              className="bg-primary-800 p-4 rounded-3xl text-white hover:bg-primary-600 transition-all"
            >
              <LuSpeech className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4 p-6">
        {topicos?.topicos.map((topico, index) => {
          return (
            <div
              key={index}
              className={`card ${bgColor} ${textColor} shadow-xl w-full transform transition-transform duration-300 ease-in-out hover:scale-105`}
            >
              <div className="flex items-center h-full">
                <div className="bg-primary-800 p-2 h-full text-white rounded-tl-lg rounded-bl-lg">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox bg-white"
                  />
                </div>
                <div className="p-2 w-full h-full">
                  <h2>{topico.descricao}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-base-200 overflow-hidden">
        <h1
          className={`font-bold text-xl ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Fontes
        </h1>
        <div className="flex flex-col gap-4">
          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 1.1.1: Non-text
            Content (Level A), Available at:{" "}
            <a
              className="text-primary-800"
              href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html
            </a>
          </p>

          <p>
            WCAG 2.1 Understanding Docs, SC 1.3.1: Info and Relationships,
            Available at:{" "}
            <a
              className="text-primary-800"
              href="https://www.w3.org/WAI/WCAG21/Understanding/meaning-in-context.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/meaning-in-context.html
            </a>
          </p>

          <p>
            WCAG 2.1 Understanding Docs, SC 1.4.3: Contrast (Minimum), Available
            at:{" "}
            <a
              className="text-primary-800"
              href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
            </a>
          </p>

          <p>
            WCAG 2.1 Understanding Docs, SC 1.4.5: Text Resize, Available at:{" "}
            <a
              className="text-primary-800"
              href="https://www.w3.org/WAI/WCAG21/Understanding/text-resizing.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/text-resizing.html
            </a>
          </p>

          <p>
            WCAG 2.1 Understanding Docs, SC 2.4.7: Focus Visible, Available at:{" "}
            <a
              className="text-primary-800"
              href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html
            </a>
          </p>

          <p>
            WCAG 2.1 Understanding Docs, SC 3.2.2: On Input (Changes of
            Context), Available at:{" "}
            <a
              className="text-primary-800"
              href="https://www.w3.org/WAI/WCAG21/Understanding/on-input.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/on-input.html
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conteudo;
