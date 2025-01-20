import { LuSpeech } from "react-icons/lu";
import acessbilidade from "../../assets/acessibilidade/image.png";
import bg from "../../assets/bg/gradient_2.jpg";
import ConteudoModal from "../../modal/conteudo/Conteudo";
import DesenvolvimentoModal from "../../modal/desenvolvimento/DesenvolvimentoModal";
import DesignModal from "../../modal/design/DesignModal";
import FuncionalidadesAdicionaisModal from "../../modal/funcionalidades-adicionais/FuncionalidadesAdicionaisModal";
import GestaoProjetosModal from "../../modal/gestao-projetos/GestaoProjetosModal";
import TestesModal from "../../modal/testes/TestesModal";
import { useRef, useState } from "react";
import acessibilidade_dsc from "../../assets/text-to-speech/acessibilidade-digital/acessibilidade-digital.mp3";

const AcessibilidadeDigital = () => {
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

  return (
    <div>
      <div
        className="p-6  flex flex-col md:flex-row items-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="">
          <img
            className="w-full md:w-72"
            src={acessbilidade}
            alt="Guia de Boas Práticas Para Acessibilidade Digital"
          />
        </div>

        <div className="w-full md:w-2/3 p-4">
          <p className="text-xl text-white font-bold">
            Guia de Boas Práticas para Acessibilidade Digital
          </p>

          <p className="text-justify">
            O "Guia de Boas Práticas para Acessibilidade Digital", trata de
            diretrizes, conceitos e orientações práticas para promover
            acessibilidade digital em websites, aplicativos e outros ambientes
            digitais. Ele é voltado especialmente para garantir a inclusão de
            pessoas com deficiência e outros públicos que enfrentam barreiras no
            uso de tecnologias digitais.
          </p>

          <p className="text-justify">
            O guia foi produzido em parceria entre o Reino Unido e o Brasil,
            como parte do Programa de Cooperação em Acesso Digital (Digital
            Access Programme – DAP).
          </p>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <h1 className="font-bold text-xl">Pontos Principais</h1>

        <ul className="list-decimal list-inside flex flex-col gap-4">
          <li>
            <strong>Importância da Acessibilidade Digital: </strong> Explica
            como a acessibilidade beneficia pessoas com deficiência (visual,
            auditiva, motora, neurodiversas, entre outras) e outros grupos, como
            idosos e pessoas de baixo letramento.
          </li>

          <li>
            <strong>WCAG (Web Content Accessibility Guidelines): </strong>
            Introduz as diretrizes internacionais de acessibilidade para
            conteúdo web, que fornecem padrões para tornar páginas, conteúdos e
            aplicativos acessíveis.
          </li>

          <li>
            <strong>Boas Práticas em Diferentes Áreas:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>
                <strong>Gestão de Projetos: </strong>
                Integração da acessibilidade desde a concepção de projetos até
                sua implementação.
              </li>

              <li>
                <strong>Design: </strong>
                Foco em contraste, responsividade, escolha de cores, organização
                da interface e elementos visuais que atendam às necessidades de
                todos os usuários.
              </li>

              <li>
                <strong>Conteúdo: </strong>
                Produção de textos, imagens, vídeos e áudios acessíveis, com
                atenção à linguagem e terminologias apropriadas.
              </li>
            </ul>
          </li>

          <li>
            <strong>Legislação e Direitos: </strong>
            Destaca que a acessibilidade digital é um direito humano,
            reconhecido por leis e diretrizes, como a Lei Brasileira de Inclusão
            (LBI).
          </li>

          <li>
            <strong>Ferramentas e Exemplos: </strong>
            Apresenta ferramentas e práticas para verificar e melhorar a
            acessibilidade digital.
          </li>
        </ul>
        <div>
          <audio ref={audioRef} src={acessibilidade_dsc} />
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

      <div className="p-6 flex flex-col gap-4">
        <h1 className="font-bold text-xl">
          Checklist para Boas Práticas de Acessibilidade Digital
        </h1>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() =>
              (
                document.getElementById("gestao_projetos") as HTMLDialogElement
              ).showModal()
            }
            className="rounded-3xl p-4 bg-primary-800 text-white font-bold hover:bg-primary-600 text-sm transition-all"
          >
            Gestão de Projetos
          </button>

          <button
            onClick={() =>
              (
                document.getElementById("desenvolvimento") as HTMLDialogElement
              ).showModal()
            }
            className="rounded-3xl p-4 bg-primary-800 text-white font-bold hover:bg-primary-600 text-sm transition-all"
          >
            Desenvolvimento
          </button>

          <button
            onClick={() =>
              (
                document.getElementById("design") as HTMLDialogElement
              ).showModal()
            }
            className="rounded-3xl p-4 bg-primary-800 text-white font-bold hover:bg-primary-600 text-sm transition-all"
          >
            Design
          </button>

          <button
            onClick={() =>
              (
                document.getElementById("conteudo") as HTMLDialogElement
              ).showModal()
            }
            className="rounded-3xl p-4 bg-primary-800 text-white font-bold hover:bg-primary-600 text-sm transition-all"
          >
            Conteúdo
          </button>

          <button
            onClick={() =>
              (
                document.getElementById("testes") as HTMLDialogElement
              ).showModal()
            }
            className="rounded-3xl p-4 bg-primary-800 text-white font-bold hover:bg-primary-600 text-sm transition-all"
          >
            Testes
          </button>

          <button
            onClick={() =>
              (
                document.getElementById("funcionalidades") as HTMLDialogElement
              ).showModal()
            }
            className="rounded-3xl p-4 bg-primary-800 text-white font-bold hover:bg-primary-600 text-sm transition-all"
          >
            Funcionalidades Adicionais
          </button>
        </div>
      </div>

      <GestaoProjetosModal />
      <DesenvolvimentoModal />
      <DesignModal />
      <ConteudoModal />
      <FuncionalidadesAdicionaisModal />
      <TestesModal />
    </div>
  );
};

export default AcessibilidadeDigital;
