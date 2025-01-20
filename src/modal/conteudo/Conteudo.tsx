const ConteudoModal = () => {
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
            <h3 className="font-bold text-lg">Conteúdo</h3>
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
