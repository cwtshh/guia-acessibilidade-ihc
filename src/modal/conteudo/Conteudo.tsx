import { useRef, useState } from "react";
import { LuSpeech } from "react-icons/lu";

const ConteudoModal = () => {
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
      <dialog id="conteudo" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <h3 className="font-bold text-xl">Conteúdo</h3>
              <audio
                ref={audioRef}
                src="src/text-to-speech/acessibilidade-digital/conteudo/conteudo.mp3"
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
                Escreva textos objetivos, com frases curtas e alinhados à
                esquerda.
              </li>

              <li>
                Evite o uso de jargões, figuras de linguagem ou frases ambíguas.
              </li>

              <li>
                Disponibilize conteúdos em <strong>múltiplos formatos</strong>{" "}
                (texto, áudio, vídeo).
              </li>

              <li>
                Inclua legendas em vídeos e intérpretes de Libras quando
                necessário.
              </li>

              <li>
                Utilize cabeçalhos organizados hierarquicamente (H1, H2, H3).
              </li>
            </ul>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ConteudoModal;
