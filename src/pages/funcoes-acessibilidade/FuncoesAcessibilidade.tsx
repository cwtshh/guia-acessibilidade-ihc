import { LuSpeech } from "react-icons/lu";
import bg from "../../assets/bg/gradient_2.jpg";
import { Link } from "react-router-dom";
import { MdFormatColorText } from "react-icons/md";
import { FaRegKeyboard } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

const FuncoesAcessibilidade = () => {
  const { theme } = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Definir estilos com base no tema
  const isDarkTheme = theme === "dark";
  const textColor = isDarkTheme ? "text-gray-200" : "text-gray-800";
  const bgColor = isDarkTheme ? "bg-gray-800" : "bg-white";
  const cardHeaderColor = isDarkTheme ? "bg-primary-800" : "bg-primary-800";

  return (
    <div>
      <div
        className={`text-white p-6`}
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Funcionalidades de Acessibilidade</li>
          </ul>
        </div>
        <h1 className="font-bold text-xl">Funcionalidades de Acessibilidade</h1>
        <p className="text-justify">
          Quando se fala em funcionalidades de acessibilidade no contexto de
          sites e aplicações, o foco é proporcionar recursos que permitam a
          pessoas com diferentes tipos de deficiência interagir de forma plena
          com o conteúdo.
        </p>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-6 ${textColor}`}
      >
        <div className={`${bgColor} rounded-lg shadow-md w-full`}>
          <div
            className={`${cardHeaderColor} text-white p-4 rounded-t-lg w-full flex flex-col gap-5`}
          >
            <LuSpeech className="text-2xl" />
            <h2 className="font-bold text-xl">Text-to-Speech (TTS)</h2>
          </div>
          <div className="p-4">
            <p>
              Permite que o texto exibido na página seja lido em voz alta para o
              usuário. Isso é útil para deficientes visuais ou pessoas com
              dificuldades de leitura.
            </p>
            <p>
              Pode ser ativado em conteúdo de texto, como artigos, menus, e até
              botões.
            </p>
          </div>
        </div>

        <div className={`${bgColor} rounded-lg shadow-md w-full`}>
          <div
            className={`${cardHeaderColor} text-white p-4 rounded-t-lg w-full flex flex-col gap-5`}
          >
            <MdFormatColorText className="text-2xl" />
            <h2 className="font-bold text-xl">Speech-to-Text (STT)</h2>
          </div>
          <div className="p-4">
            <p>
              Permite que o usuário fale para o site e a fala seja convertida em
              texto. Isso é útil para usuários com deficiência motora que não
              podem digitar facilmente ou para pessoas com dificuldades de
              coordenação motora.
            </p>
          </div>
        </div>

        <div className={`${bgColor} rounded-lg shadow-md w-full`}>
          <div
            className={`${cardHeaderColor} text-white p-4 rounded-t-lg w-full flex flex-col gap-5`}
          >
            <FaRegKeyboard className="text-2xl" />
            <h2 className="font-bold text-xl">Controle por Teclado</h2>
          </div>
          <div className="p-4">
            <p>
              Permite que o usuário fale para o site e a fala seja convertida em
              texto. Isso é útil para usuários com deficiência motora que não
              podem digitar facilmente ou para pessoas com dificuldades de
              coordenação motora.
            </p>
          </div>
        </div>

        <div className={`${bgColor} rounded-lg shadow-md w-full`}>
          <div
            className={`${cardHeaderColor} text-white p-4 rounded-t-lg w-full flex flex-col gap-5`}
          >
            <FaMobileScreen className="text-2xl" />
            <h2 className="font-bold text-xl">
              Leitores de Tela (Screen Readers)
            </h2>
          </div>
          <div className="p-4">
            <p>
              Ferramentas como o <strong>NVDA, JAWS</strong> e{" "}
              <strong>VoiceOver</strong> são usadas por pessoas com deficiência
              visual para ler o conteúdo de um site.
            </p>
            <p>
              Para garantir a compatibilidade, o conteúdo precisa ter textos
              alternativos para imagens, descrições de links, e uso correto de
              marcação semântica (por exemplo, alt em imagens, aria-label para
              botões).
            </p>
          </div>
        </div>

        <div className={`${bgColor} rounded-lg shadow-md w-full`}>
          <div
            className={`${cardHeaderColor} text-white p-4 rounded-t-lg w-full flex flex-col gap-5`}
          >
            <IoColorPaletteOutline className="text-2xl" />
            <h2 className="font-bold text-xl">Ajuste de Contraste</h2>
          </div>
          <div className="p-4">
            <p>
              Funcionalidades que permitem o ajuste do contraste entre texto e
              fundo, como modos de contraste alto ou temas escuros, ajudam
              pessoas com baixa visão ou deficiência de percepção de cores a
              visualizar o conteúdo de forma mais clara.
            </p>
            <p>
              Pode incluir botões ou configurações que alterem o esquema de
              cores do site.
            </p>
          </div>
        </div>

        <div className={`${bgColor} rounded-lg shadow-md w-full`}>
          <div
            className={`${cardHeaderColor} text-white p-4 rounded-t-lg w-full flex flex-col gap-5`}
          >
            <IoColorPaletteOutline className="text-2xl" />
            <h2 className="font-bold text-xl">Interface Personalizável</h2>
          </div>
          <div className="p-4">
            <p>
              Funcionalidades que permitem aos usuários{" "}
              <strong>ajustar o layout</strong> da página para atender suas
              necessidades, como aumentar o espaçamento entre linhas, mudar a
              fonte para uma mais legível ou alterar o tamanho dos botões.
            </p>
            <p>
              Isso beneficia usuários com <strong>dislexia, baixa visão</strong>{" "}
              ou <strong>dificuldade de leitura</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuncoesAcessibilidade;
