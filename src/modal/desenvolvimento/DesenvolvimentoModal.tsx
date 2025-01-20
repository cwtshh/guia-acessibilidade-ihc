import { useRef, useState } from "react";
import { LuSpeech } from "react-icons/lu";

const DesenvolvimentoModal = () => {
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
      <dialog id="desenvolvimento" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <h3 className="font-bold text-xl">Desenvolvimento</h3>
              <audio
                ref={audioRef}
                src="src/assets/text-to-speech/acessibilidade-digital/desenvolvimento/desenvolvimento.mp3"
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
                Utilize <strong>HTML</strong> semântico para facilitar o
                entendimento por tecnologias assistivas.
              </li>

              <li>
                Adicione textos alternativos (alt) descritivos às imagens
                relevantes.
              </li>

              <li>
                Certifique-se de que os botões e links tenham descrições claras
                e corretas.
              </li>

              <li>
                Verifique o funcionamento via teclado de todos os elementos
                interativos.
              </li>

              <li>
                Teste a aplicação em diferentes dispositivos (celular e
                computador).
              </li>

              <li>
                Evite ou torne acessíveis elementos como{" "}
                <strong>captchas</strong> e <strong>modais</strong>.
              </li>
            </ul>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DesenvolvimentoModal;
