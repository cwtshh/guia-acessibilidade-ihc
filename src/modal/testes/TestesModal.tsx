import { useRef, useState } from "react";
import { LuSpeech } from "react-icons/lu";

const TestesModal = () => {
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
      <dialog id="testes" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <h3 className="font-bold text-xl">Testes</h3>
              <audio
                ref={audioRef}
                src="src/text-to-speech/testes/testes.mp3"
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
                Realize testes manuais com apoio de pessoas com deficiência.
              </li>
              <li>
                Utilize ferramentas automáticas para validar contrastes e
                semântica HTML.
              </li>
              <li>
                Documente as barreiras encontradas e implemente correções.
              </li>
              <li>Teste com leitores de tela e em navegadores diversos.</li>
            </ul>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default TestesModal;
