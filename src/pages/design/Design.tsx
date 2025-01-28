import { useEffect, useState, useRef } from "react";
import bg from "../../assets/bg/gradient_2.jpg";
import data from "../../json/design/data.json";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { LuSpeech } from "react-icons/lu";
import design from "../../assets/text-to-speech/v2/design/design.mp3";

interface Topico {
  descricao: string;
  fonte: string;
}

interface Diretriz {
  categoria: string;
  topicos: Topico[];
}

const Design = () => {
  const [diretrizes, setDiretrizes] = useState<Diretriz[]>([]);
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
    const transformedData: Diretriz[] = Object.values(data);
    setDiretrizes(transformedData);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isDarkTheme = theme === "dark";
  const textColor = isDarkTheme ? "text-gray-200" : "text-gray-800";
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
            <li>Design</li>
          </ul>
        </div>
        <h1 className="font-bold text-xl">Design</h1>
        <p className="text-justify">
          O design acessível é fundamental para garantir que todos os usuários,
          independentemente de suas habilidades, possam acessar e interagir com
          conteúdos e funcionalidades de uma interface digital. Ele busca criar
          experiências inclusivas, permitindo que pessoas com diferentes tipos
          de deficiências visuais, auditivas, motoras ou cognitivas tenham
          acesso pleno à informação e aos serviços online.
        </p>

        <div className="mt-6">
          <audio ref={audioRef} src={design} />
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

      <div
        className={`p-6 flex flex-col gap-5 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {diretrizes.map((diretriz) => {
          return (
            <div key={diretriz.categoria}>
              <h1 className="font-bold text-xl">
                {diretriz.categoria.toUpperCase()}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {diretriz.topicos.map((topico, index) => {
                  return (
                    <div
                      key={index}
                      className={`card ${bgColor} ${textColor} shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105`}
                    >
                      <div className="flex items-center h-full">
                        <div
                          className={`bg-primary-800 p-2 h-full text-white rounded-tl-lg rounded-bl-lg`}
                        >
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox bg-white"
                          />
                        </div>
                        <div className="p-4 flex-1">
                          <p
                            className={`md:text-base ${
                              theme === "dark" ? "text-white" : "text-black"
                            }`}
                          >
                            {topico.descricao}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-base-200 p-6 overflow-hidden">
        <h1 className="font-bold text-xl">Fontes</h1>
        <div className="flex flex-col gap-4">
          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 1.1.1: Non-text
            Content (Level A), Disponível em:
            <a
              className="text-primary-500"
              href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html
            </a>
          </p>

          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 1.4.3: Contrast
            (Minimum) (Level AA), Disponível em:
            <a
              className="text-primary-500"
              href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
            </a>
          </p>

          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 1.4.6: Contrast
            (Enhanced) (Level AAA), Disponível em:
            <a
              className="text-primary-500"
              href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html
            </a>
          </p>

          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 2.1.1: Keyboard (Level
            A), Disponível em:
            <a
              className="text-primary-500"
              href="https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html
            </a>
          </p>

          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 2.4.7: Focus Visible
            (Level AA), Disponível em:
            <a
              className="text-primary-500"
              href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html
            </a>
          </p>

          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 3.1.1: Language of
            Page (Level A), Disponível em:
            <a
              className="text-primary-500"
              href="https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html
            </a>
          </p>

          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 3.2.3: Consistent
            Navigation (Level AA), Disponível em:
            <a
              className="text-primary-500"
              href="https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html
            </a>
          </p>

          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 3.3.3: Error
            Suggestion (Level AA), Disponível em:
            <a
              className="text-primary-500"
              href="https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html
            </a>
          </p>

          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 4.1.2: Name, Role,
            Value (Level A), Disponível em:
            <a
              className="text-primary-500"
              href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html
            </a>
          </p>

          <p>
            WCAG 2.1 Understanding Docs, Understanding SC 4.1.3: Status Messages
            (Level AA), Disponível em:
            <a
              className="text-primary-500"
              href="https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"
            >
              https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Design;
