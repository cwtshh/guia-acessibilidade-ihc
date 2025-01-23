import bg from "../../assets/bg/gradient_2.jpg";
import abnt_gb from "../../assets/abnt/image.png";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { LuSpeech } from "react-icons/lu";
import introducao from "../../assets/text-to-speech/abnt/introducao.mp3";
import aplicacoes from "../../assets/text-to-speech/abnt/aplicacoes.mp3";
import checklist from "../../assets/text-to-speech/abnt/checklist.mp3";

const Abnt = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioRef2 = useRef<HTMLAudioElement>(null);
  const audioRef3 = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const togglePlay2 = () => {
    if (isPlaying) {
      audioRef2.current?.pause();
    } else {
      audioRef2.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const togglePlay3 = () => {
    if (isPlaying) {
      audioRef3.current?.pause();
    } else {
      audioRef3.current?.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <div
        className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 text-white"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={abnt_gb}
          className="h-56 sm:h-80 w-full sm:w-auto object-contain"
          alt="Projeto ABNT"
        />
        <div className="text-center sm:text-left">
          <h1 className="font-bold text-lg sm:text-xl">
            PROJETO ABNT NBR 17225
          </h1>
          <p className="leading-relaxed">
            O Projeto ABNT NBR 17225 estabelece requisitos de acessibilidade
            para conteúdos e aplicações web, visando eliminar barreiras de
            acesso para pessoas com deficiência. Este projeto foi elaborado pela
            Comissão de Estudo de Acessibilidade para a Inclusão Digital e segue
            as Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.2). O
            objetivo é otimizar o acesso a ambientes virtuais para todos,
            especialmente aqueles com necessidades de acessibilidade.
          </p>
        </div>
      </div>

      <div className="p-4 sm:p-6 flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <h2 className="font-bold text-lg sm:text-xl">
            Objetivos principais da norma:
          </h2>

          <div>
            <audio ref={audioRef} src={introducao} />
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

        <ul className="list-decimal list-inside ml-4">
          <li>
            <strong>Facilitar o Acesso:</strong> Eliminar ou mitigar barreiras
            para pessoas com necessidades de acessibilidade, especialmente
            aquelas com deficiências.
          </li>

          <li>
            <strong>Conformidade com Normas:</strong> Atender às Diretrizes de
            Acessibilidade para Conteúdo Web 2.2 (WCAG 2.2) para garantir a
            acessibilidade em ambientes virtuais.
          </li>

          <li>
            <strong>Melhorar a Usabilidade:</strong> Implementar práticas que
            promovam uma experiência acessível e confortável para todos os
            usuários, incluindo aqueles com habilidades cognitivas, de linguagem
            e de aprendizagem limitadas.
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <h2 className="font-bold text-lg sm:text-xl">Aplicações</h2>
          <div>
            <audio ref={audioRef2} src={aplicacoes} />
            <div className="tooltip" data-tip="Texto Para Fala">
              <button
                onClick={togglePlay2}
                className="bg-primary-800 p-4 rounded-3xl text-white hover:bg-primary-600 transition-all"
              >
                <LuSpeech className="text-2xl" />
              </button>
            </div>
          </div>
        </div>

        <p className="leading-relaxed">
          As aplicações incluem tecnologia assistiva, como leitores de tela,
          ampliadores de tela e softwares de conversão de texto para fala, que
          ajudam usuários com deficiências a interagir com conteúdo digital.
          Também se aplicam diretrizes para garantir que aplicativos móveis
          sejam utilizáveis por pessoas com diferentes tipos de deficiência.
          Além disso, a implementação de práticas de acessibilidade em websites
          e aplicações web, seguindo normas como WCAG e ARIA, assegura que todos
          os usuários possam acessar e interagir com o conteúdo.
        </p>

        <div className="flex items-center gap-4">
          <h2 className="font-bold text-lg sm:text-xl">Checklists</h2>
          <div>
            <audio ref={audioRef3} src={checklist} />
            <div className="tooltip" data-tip="Texto Para Fala">
              <button
                onClick={togglePlay3}
                className="bg-primary-800 p-4 rounded-3xl text-white hover:bg-primary-600 transition-all"
              >
                <LuSpeech className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
        <p>
          O projeto ABNT NBR 17225 disponibiliza checklists especializados para
          a avaliação da qualidade da acessibilidade em websites. Esses
          instrumentos fornecem uma abordagem estruturada para identificar e
          corrigir barreiras de acesso, assegurando a conformidade com os
          requisitos estabelecidos e promovendo uma experiência inclusiva para
          todos os usuários.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 overflow-x-auto">
          <button
            onClick={() => navigate("/abnt/tabela/c1")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.1 - Interação por teclado
          </button>

          <button
            onClick={() => navigate("/abnt/tabela/c2")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.2 - Imagens
          </button>

          <button
            onClick={() => navigate("/abnt/tabela/c3")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.3 – Cabeçalhos
          </button>

          <button
            onClick={() => navigate("/abnt/tabela/c4")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.4 – Regiões
          </button>

          <button
            onClick={() => navigate("/abnt/tabela/c5")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.5 – Listas
          </button>

          <button
            onClick={() => navigate("/abnt/tabela/c6")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.6 – Tabelas
          </button>

          <button
            onClick={() => navigate("/abnt/tabela/c7")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.7 – Links e navegação
          </button>

          <button
            onClick={() => navigate("/abnt/tabela/c8")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.8 – Botões e controles
          </button>

          <button
            onClick={() => navigate("/abnt/tabela/c9")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.9 – Formulários e entrada de dados
          </button>

          <button
            onClick={() => navigate("/abnt/tabela/c10")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.10 – Apresentação
          </button>
        </div>
      </div>
    </div>
  );
};

export default Abnt;
