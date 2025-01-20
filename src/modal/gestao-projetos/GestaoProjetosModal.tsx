const GestaoProjetosModal = () => {
  return (
    <div>
      <dialog id="gestao_projetos" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl">Gestão de Projetos</h3>
            <ul className="list-disc list-inside flex flex-col gap-2">
              <li>
                Inclua a acessibilidade desde a fase inicial do projeto
                (Iniciação).
              </li>
              <li>
                Trabalhe o conceito de <strong>Desenho Universal.</strong>
              </li>
              <li>
                Envolva pessoas com deficiência no planejamento e execução.
              </li>
              <li>
                Realize sessões de brainstorming para definir personas e
                desafios.
              </li>
              <li>
                Garanta que a equipe compreenda a importância da acessibilidade.
              </li>
              <li>
                Monitore e controle continuamente o progresso e adequação do
                projeto.
              </li>
            </ul>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default GestaoProjetosModal;
