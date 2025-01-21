const TabelaC6 = () => {
  return (
    <div className="overflow-x-auto p-6">
      <table className="table table-zebra text-black">
        {/* head */}
        <thead>
          <tr>
            <th>Item</th>
            <th>Classificação</th>
            <th>C.S. e nível de conformidade WCAG 2.2</th>
            <th>Checklist</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p className="font-bold">5.6.1 Semântica de tabela</p>
              <p>
                Todas as tabelas de dados possuem semântica determinada
                programaticamente.
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.3.1 (A)</p>
            </td>
            <td>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>Sim</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>Não</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>N/A</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p className="font-bold">5.6.2 Uso de Tabelas</p>
              <p>
                Todas as tabelas são utilizadas para apresentar dados tabulares.
                Não há tabelas de leiaute; ou Todas as tabelas de leiaute não
                possuem semântica determinada.
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.3.1 (A)</p>
            </td>
            <td>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>Sim</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>Não</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>N/A</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p className="font-bold">5.6.3 Cabeçalhos de tabela</p>
              <p>
                Todas as células de dados de uma tabela estão associadas com os
                respectivos cabeçalhos de linha e coluna de forma
                programaticamente determinada.
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.3.1 (A)</p>
            </td>
            <td>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>Sim</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>Não</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>N/A</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p className="font-bold">5.6.4 Título de tabela</p>
              <p>
                Todas as tabelas possuem um título ou legenda que as identifica.
              </p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>
            <td>
              <p>2.4.6 (AA)</p>
              <p>2.4.10 (AAA)</p>
            </td>
            <td>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>Sim</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>Não</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>N/A</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p className="font-bold">5.6.5 Título de tabela associado</p>
              <p>
                Todos os títulos ou legendas de tabela estão associados à
                respectiva tabela de forma programaticamente determinada.
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.3.1 (A)</p>
            </td>
            <td>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>Sim</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>Não</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>N/A</p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p className="font-bold">
                5.6.6 Descrição para tabelas complexas
              </p>
              <p>
                Todas as tabelas complexas possuem uma descrição da tabela em
                texto.
              </p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>
            <td>
              <p>3.1.5 (AAA)</p>
            </td>
            <td>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>Sim</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>Não</p>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="checkbox" />
                <p>N/A</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaC6;
