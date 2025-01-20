const DesignModal = () => {
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
            <h3 className="font-bold text-xl">Design</h3>
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
