import { useRef, useState } from "react";
import { LuSpeech } from "react-icons/lu";

const DesignModal = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div>
      <dialog id="design" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <h3 className="font-bold text-xl">Design</h3>
              <audio
                ref={audioRef}
                src="src/assets/text-to-speech/acessibilidade-digital/design/design.mp3"
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
                Utilize <strong>contrastes adequados</strong> para fundo e texto
                (ex.: fundo claro com texto escuro).
              </li>

              <li>
                Adote <strong>design responsivo</strong> para adaptação em
                diferentes telas.
              </li>

              <li>
                Priorize botões e áreas clicáveis com tamanho mínimo de 44px por
                44px.
              </li>

              <li>Evite uso exclusivo de cores para transmitir informações.</li>

              <li>
                Ofereça modos de visualização como{" "}
                <strong>alto contraste</strong> ou <strong>dark mode</strong>.
              </li>
            </ul>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DesignModal;
