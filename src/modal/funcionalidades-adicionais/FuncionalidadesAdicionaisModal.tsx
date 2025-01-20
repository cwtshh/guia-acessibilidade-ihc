import { useRef, useState } from "react";
import { LuSpeech } from "react-icons/lu";

const FuncionalidadesAdicionaisModal = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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
      <dialog id="funcionalidades" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <h3 className="font-bold text-xl">Funcionalidades Adicionais</h3>
              <audio
                ref={audioRef}
                src="src/assets/text-to-speech/acessibilidade-digital/conteudo/conteudo.mp3"
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
                Ofereça atalhos de navegação para acesso rápido ao conteúdo
                principal.
              </li>
              <li>
                Garanta que animações possam ser pausadas, paradas ou ocultadas.
              </li>
              <li>
                Adicione mensagens claras e próximas a campos de formulários com
                erro.
              </li>
              <li>
                Evite movimentos repetitivos ou piscantes (máximo de 3 por
                segundo).
              </li>
            </ul>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default FuncionalidadesAdicionaisModal;
