const TabelaC7 = () => {
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
              <p className="font-bold">5.7.1 Semântica de link</p>
              <p>
                Todos os links possuem semântica determinada programaticamente.
              </p>
            </td>
            <td>Requisito</td>
            <td>1.3.1 (A)</td>
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
              <p className="font-bold">5.7.2 Uso de links</p>
              <p>Todos os links são utilizados para navegação.</p>
            </td>
            <td>Requisito</td>
            <td>1.3.1 (A)</td>
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
              <p className="font-bold">5.7.3 Propósito do link sem contexto</p>
              <p>
                Todos os links possuem texto, texto alternativo ou nome
                acessível que indica sua função ou destino.
              </p>
              <p>
                <em>NOTA</em>: Cumprindo o descrito neste item, cumpre-se também
                o item 5.7.4, Propósito do link no contexto.
              </p>
            </td>
            <td>Recomendação</td>
            <td>2.4.4 (A), 2.4.9 (AAA)</td>
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
              <p className="font-bold">5.7.4 Propósito do link no contexto</p>
              <p>
                Todos os links possuem texto, texto alternativo ou nome
                acessível que, em conjunto com o contexto do link, informa sua
                função ou destino.
              </p>
            </td>
            <td>Requisito</td>
            <td>2.4.4 (A)</td>
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
                5.7.5 Links com identificação consistente
              </p>
              <p>
                Não há links com texto, texto alternativo ou nome acessível
                iguais que levam para destinos diferentes.
              </p>
            </td>
            <td>Recomendação</td>
            <td>3.2.4 (AA), 2.4.9 (AAA)</td>
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
                5.7.6 Links que abrem em uma nova guia ou janela
              </p>
              <p>
                Não há links que abrem em uma nova guia ou janela; ou todos os
                links que abrem em uma nova guia ou janela informam isso ao
                usuário.
              </p>
            </td>
            <td>Recomendação</td>
            <td>2.4.4 (A), 2.4.9 (AAA), 3.2.5 (AAA)</td>
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
              <p className="font-bold">5.7.7 Links para arquivos (não HTML)</p>
              <p>
                Todos os links para arquivos incluem no texto ou no texto
                alternativo a informação do formato e tamanho do arquivo; ou o
                link para arquivo informa isso ao usuário de outra forma.
              </p>
            </td>
            <td>Recomendação</td>
            <td>2.4.4 (A), 2.4.9 (AAA)</td>
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
              <p className="font-bold">5.7.8 Links para e-mail</p>
              <p>Todos os links para e-mail informam isso ao usuário.</p>
            </td>
            <td>Recomendação</td>
            <td>2.4.4 (A), 2.4.9 (AAA)</td>
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
              <p>
                <strong>5.7.10 Links adjacentes</strong>
              </p>
              <p>Não há links adjacentes que levam para o mesmo destino.</p>
            </td>
            <td>Recomendação</td>
            <td>2.4.4 (A)</td>
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
              <p>
                <strong>5.7.11 Links para contornar blocos de conteúdo</strong>
              </p>
              <p>
                Há um ou mais links (ou outro mecanismo) que permitem contornar
                blocos de conteúdo na página.
              </p>
            </td>
            <td>Recomendação</td>
            <td>2.4.1 (A)</td>
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
              <p>
                <strong>
                  5.7.12 Links para contornar blocos de conteúdo em conjunto de
                  páginas
                </strong>
              </p>
              <p>
                Há um ou mais links (ou outro mecanismo) que permitem contornar
                blocos de conteúdo que se repetem em um conjunto de páginas.
              </p>
            </td>
            <td>Requisito</td>
            <td>2.4.1 (A)</td>
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
              <p>
                <strong>5.7.13 Alternativas para localização</strong>
              </p>
              <p>
                Há mais de uma forma para encontrar uma página em um conjunto de
                páginas; ou a página é o resultado ou uma etapa de um processo.
              </p>
            </td>
            <td>Requisito</td>
            <td>2.4.5 (AA)</td>
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
              <p>
                <strong>5.7.14 Localização em conjunto de páginas</strong>
              </p>
              <p>
                Há informação sobre a localização do usuário em relação às
                demais páginas ou seções do site.
              </p>
            </td>
            <td>Recomendação</td>
            <td>2.4.8 (AAA)</td>
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
              <p>
                <strong>5.7.15 Navegação consistente</strong>
              </p>
              <p>
                Todos os mecanismos de navegação que se repetem em um conjunto
                de páginas estão na mesma ordem relativa; ou a posição do
                mecanismo é alterada pelo usuário.
              </p>
            </td>
            <td>Requisito</td>
            <td>3.2.3 (AA)</td>
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
              <p>
                <strong>5.7.16 Ajuda consistente</strong>
              </p>
              <p>
                Todos os mecanismos de ajuda que se repetem em um conjunto de
                páginas estão na mesma ordem relativa; ou a posição do mecanismo
                é alterada pelo usuário.
              </p>
            </td>
            <td>Requisito</td>
            <td>3.2.6 (A)</td>
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

export default TabelaC7;
