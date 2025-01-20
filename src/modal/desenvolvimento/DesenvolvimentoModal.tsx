const DesenvolvimentoModal = () => {
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
            <h3 className="font-bold text-xl">Desenvolvimento</h3>
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
