import { useRef, useState } from "react";
import { LuSpeech } from "react-icons/lu";

const GestaoProjetosModal = () => {
  const [isPlaying, setIsPLaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPLaying(!isPlaying);
  };

  return (
    <div>
      <dialog id="gestao_projetos" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <h3 className="font-bold text-xl">Gestão de Projetos</h3>
              <audio
                ref={audioRef}
                src="src/text-to-speech/acessibilidade-digital/gestao-projetos/gestao-projetos.mp3"
              />
              <div className="tooltip" data-tip="Texto Para Fala">
                <button
                  onClick={togglePlay}
                  className="bg-primary-800 p-4 rounded-3xl text-white hover:bg-primary-600 transition-all"
                >
                  <LuSpeech className="text-2xl" />
                </button>
              </div>
            </div>
            <ul className="list-disc list-inside flex flex-col gap-2">
              <li>
                Inclua a acessibilidade desde a fase inicial do projeto
                (Iniciação).
              </li>
              <li>
                Trabalhe o conceito de <strong>Desenho Universal.</strong>
              </li>
              <li>
                Envolva pessoas com deficiência no planejamento e execução.
              </li>
              <li>
                Realize sessões de brainstorming para definir personas e
                desafios.
              </li>
              <li>
                Garanta que a equipe compreenda a importância da acessibilidade.
              </li>
              <li>
                Monitore e controle continuamente o progresso e adequação do
                projeto.
              </li>
            </ul>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default GestaoProjetosModal;
