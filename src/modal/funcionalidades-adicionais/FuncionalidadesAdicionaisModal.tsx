const FuncionalidadesAdicionaisModal = () => {
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
            <h3 className="font-bold text-lg">Funcionalidades Adicionais</h3>
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
