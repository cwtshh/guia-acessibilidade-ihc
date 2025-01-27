import bg from "../../assets/bg/gradient_2.jpg";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useEffect, useRef, useState } from "react";
import { LuSpeech } from "react-icons/lu";
import audio1 from "../../assets/text-to-speech/v2/ferramentas/audio1.mp3";
import { FaLink } from "react-icons/fa";

const FerramentasAcessibilidades = () => {
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

  const isDarkTheme = theme === "dark";
  const textColor = isDarkTheme ? "text-gray-200" : "text-gray-800";
  const bgColor = isDarkTheme ? "bg-gray-800" : "bg-white";
  const cardHeaderColor = isDarkTheme ? "bg-primary-800" : "bg-primary-800";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <li>Ferramentas de Acessibilidade</li>
          </ul>
        </div>
        <h1 className="font-bold text-xl">Ferramentas de Acessibilidade</h1>
        <p className="text-justify">
          Ferramentas de acessibilidade no desenvolvimento web têm como
          propósito principal garantir que pessoas com diferentes tipos de
          deficiência possam acessar e utilizar sites e aplicações de forma
          autônoma, promovendo uma experiência inclusiva e eliminando barreiras
          de interação.
        </p>
        <div className="mt-6">
          <audio ref={audioRef} src={audio1} />
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
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-6 ${textColor}`}
      >
        <div
          className={`${bgColor} rounded-lg shadow-md w-full transform transition-transform duration-300 ease-in-out hover:scale-105`}
        >
          <div
            className={`${cardHeaderColor} text-white p-4 rounded-t-lg w-full flex flex-col gap-5`}
          >
            <h2 className="font-bold text-xl">
              Wave - Web Accessibility Evaluation Tool
            </h2>
            <a href="https://wave.webaim.org/">
              <FaLink />
            </a>
          </div>
          <div className="p-4">
            <p>
              O WAVE® é um conjunto de ferramentas de avaliação que ajuda os
              autores a tornar seu conteúdo na web mais acessível para pessoas
              com deficiência.
            </p>
          </div>
        </div>

        <div
          className={`${bgColor} rounded-lg shadow-md w-full transform transition-transform duration-300 ease-in-out hover:scale-105`}
        >
          <div
            className={`${cardHeaderColor} text-white p-4 rounded-t-lg w-full flex flex-col gap-5`}
          >
            <h2 className="font-bold text-xl">Axe</h2>
            <a href="https://www.deque.com/axe/">
              <FaLink />
            </a>
          </div>
          <div className="p-4">
            <p>
              É uma das ferramentas mais populares para testar a acessibilidade
              de sites. Oferece uma extensão para Chrome e Firefox que permite
              verificar se uma página web está em conformidade com as diretrizes
              de acessibilidade.
            </p>
          </div>
        </div>

        <div
          className={`${bgColor} rounded-lg shadow-md w-full transform transition-transform duration-300 ease-in-out hover:scale-105`}
        >
          <div
            className={`${cardHeaderColor} text-white p-4 rounded-t-lg w-full flex flex-col gap-5`}
          >
            <h2 className="font-bold text-xl">
              NVDA (NonVisual Desktop Access)
            </h2>
            <a href="https://www.nvaccess.org/">
              <FaLink />
            </a>
          </div>
          <div className="p-4">
            <p>
              Um leitor de tela gratuito e de código aberto para o Windows,
              utilizado para testar a compatibilidade de sites com leitores de
              tela.
            </p>
          </div>
        </div>

        <div
          className={`${bgColor} rounded-lg shadow-md w-full transform transition-transform duration-300 ease-in-out hover:scale-105`}
        >
          <div
            className={`${cardHeaderColor} text-white p-4 rounded-t-lg w-full flex flex-col gap-5`}
          >
            <h2 className="font-bold text-xl">Lighthouse - Google</h2>
            <a href="https://pagespeed.web.dev/">
              <FaLink />
            </a>
          </div>
          <div className="p-4">
            <p>
              O Lighthouse realiza auditorias de desempenho, acessibilidade,
              aplicativos progressivos (PWA), SEO e muito mais. Você pode
              executar o Lighthouse em qualquer página da web, seja pública ou
              que exija autenticação.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-xl">Bibliotecas para React</h3>
        <p>
          É relevante destacar que há bibliotecas disponíveis que simplificam a
          integração de funcionalidades de acessibilidade em aplicações web
          desenvolvidas com React.
        </p>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4 ${textColor}`}
        >
          <div
            className={`${bgColor} rounded-lg shadow-md w-full transform transition-transform duration-300 ease-in-out hover:scale-105`}
          >
            <div
              className={`${cardHeaderColor} text-white p-4 rounded-t-lg w-full flex flex-col gap-5`}
            >
              <h2 className="font-bold text-xl">React A11y</h2>
              <a href="https://github.com/reactjs/react-a11y">
                <FaLink />
              </a>
            </div>
            <div className="p-4">
              <p>
                Uma coleção de ferramentas e componentes para melhorar a
                acessibilidade em aplicações React. Ela verifica automaticamente
                a acessibilidade da interface e avisa sobre problemas comuns.
              </p>
            </div>
          </div>

          <div
            className={`${bgColor} rounded-lg shadow-md w-full transform transition-transform duration-300 ease-in-out hover:scale-105`}
          >
            <div
              className={`${cardHeaderColor} text-white p-4 rounded-t-lg w-full flex flex-col gap-5`}
            >
              <h2 className="font-bold text-xl">React-aria</h2>
              <a href="https://react-spectrum.adobe.com/react-aria/index.html">
                <FaLink />
              </a>
            </div>
            <div className="p-4">
              <p>
                Uma biblioteca da Adobe que fornece uma API para criar
                componentes acessíveis para React. Ela implementa as melhores
                práticas de acessibilidade e facilita o desenvolvimento de
                componentes acessíveis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FerramentasAcessibilidades;
