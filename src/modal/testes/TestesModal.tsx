const TestesModal = () => {
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
            <h3 className="font-bold text-xl">Testes</h3>
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
