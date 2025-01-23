const TabelaC8 = () => {
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
              <p className="font-bold">5.8.1 Semântica de botão</p>
              <p>
                Todos os botões possuem semântica determinada programaticamente.
                Requisito 1.3.1 (A)
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
              <p className="font-bold">5.8.2 Uso de botões</p>
              <p>
                Todos os botões são utilizados para acionar uma funcionalidade.
                Requisito 1.3.1 (A)
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
              <p className="font-bold">5.8.3 Propósito do botão</p>
              <p>
                Todos os botões possuem texto, texto alternativo ou nome
                acessível que indica sua função. Requisito 4.1.2 (A) 2.4.6 (AA)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>4.1.2 (A)</p>
              <p>2.4.6 (AA)</p>
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
                5.8.4 Identificação consistente na página
              </p>
              <p>
                Todos os componentes que possuem a mesma funcionalidade e se
                repetem na página são identificados de maneira consistente.
                Recomendação 3.2.4 (AA)
              </p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>
            <td>
              <p>3.2.4 (AA)</p>
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
                5.8.5 Identificação consistente em conjunto de páginas
              </p>
              <p>
                Todos os componentes que possuem a mesma funcionalidade e se
                repetem em um conjunto de páginas são identificados de maneira
                consistente. Requisito 3.2.4 (AA)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>3.2.4 (AA)</p>
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
                5.8.6 Área de acionamento (aprimorada)
              </p>
              <p>
                Todos os elementos interativos têm área de acionamento de pelo
                menos 44 pixels CSS de altura e largura; ou Existe um controle
                com função equivalente na mesma página, com área de acionamento
                de pelo menos 44 pixels CSS de altura e largura; ou O elemento
                está em uma sentença ou bloco de texto; ou O tamanho do elemento
                é determinado pelo agente de usuário; ou O tamanho do elemento é
                essencial para transmitir a informação. NOTA Cumprindo o
                descrito neste item, cumpre-se também o item 5.8.7, Área de
                acionamento (mínima). Recomendação 2.5.8 (AA) 2.5.5 (AAA)
              </p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>
            <td>
              <p>2.5.8 (AA)</p>
              <p>2.5.5 (AAA)</p>
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
              <p className="font-bold">5.8.7 Área de acionamento (mínima)</p>
              <p>
                Todos os elementos interativos têm área de acionamento de pelo
                menos 24 pixels CSS de altura e largura; ou O elemento tem
                espaçamento em relação aos elementos de interação adjacentes, de
                tal modo que a soma do tamanho do elemento mais o espaçamento é
                de pelo menos 24 pixels CSS em todas as direções; ou Existe um
                controle com função equivalente na mesma página com área de
                acionamento de pelo menos 24 pixels CSS de altura e largura; ou
                O elemento está em uma sentença ou bloco de texto, ou seu
                tamanho está delimitado pela altura da linha do texto; ou O
                tamanho do elemento é determinado pelo agente de usuário; ou O
                tamanho do elemento é essencial ou legalmente exigido para
                transmitir a informação. Requisito 2.5.8 (AA)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>2.5.8 (AA)</p>
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
              <p className="font-bold">5.8.8 Mudança de contexto previsível</p>
              <p>
                Toda mudança de contexto é iniciada apenas a pedido do usuário;
                ou Há um mecanismo para desativar essas mudanças de contexto.
                Recomendação 3.2.1 (A) 3.2.2 (A) 3.2.5 (AAA)
              </p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>
            <td>
              <p>3.2.1 (A)</p>
              <p>3.2.2 (A)</p>
              <p>3.2.5 (AAA)</p>
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
                5.8.9 Mudança de contexto previsível no foco
              </p>
              <p>
                Não há componentes acionados somente pelo foco do teclado ou
                posicionamento do cursor, que provocam uma mudança de contexto.
                Requisito 3.2.1 (A)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>3.2.1 (A)</p>
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
                5.8.10 Mudança de contexto previsível na entrada
              </p>
              <p>
                Não há componentes que provocam mudança de contexto enquanto o
                usuário insere ou seleciona informações; ou O usuário é avisado
                sobre esse comportamento antes de utilizar o componente.
                Requisito 3.2.2 (A)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>3.2.2 (A)</p>
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
              <p className="font-bold">5.8.11 Acionamento por ponteiro único</p>
              <p>
                Não há funcionalidade operada por ponteiro único que é acionada
                pelo pressionamento do ponteiro (down-event); ou O acionamento
                completo da funcionalidade só é finalizado ao soltar o ponteiro
                (up–event), e existe um mecanismo para interromper o acionamento
                antes da finalização ou para desfazer o acionamento após a
                finalização; ou Soltar o ponteiro reverte o acionamento
                ocasionado pelo pressionamento do ponteiro; ou O acionamento
                completo da funcionalidade pelo pressionamento do ponteiro é
                essencial. Requisito 2.5.2 (A)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>2.5.2 (A)</p>
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
                5.8.12 Operação por gestos de ponteiro
              </p>
              <p>
                Toda funcionalidade operada por gestos multiponto ou baseados em
                caminhos pode ser operada também por um ponteiro único, sem um
                gesto baseado em caminho; ou O gesto multiponto ou baseado em
                caminho é essencial; ou A funcionalidade é determinada pelo
                agente usuário, e não modificada pelo desenvolvedor. Requisito
                2.5.1 (A)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>2.5.1 (A)</p>
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
                5.8.13 Operação por movimento de arrastar
              </p>
              <p>
                Toda funcionalidade operada por movimento de arrastar pode ser
                operada também por um ponteiro único sem movimento de arrastar;
                ou O movimento de arrastar é essencial; ou A funcionalidade é
                determinada pelo agente usuário, e não modificada pelo
                desenvolvedor. Requisito 2.5.7 (AA)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>2.5.7 (AA)</p>
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
              <p className="font-bold">5.8.14 Operação por movimento</p>
              <p>
                Toda funcionalidade operada por movimento pode ser operada
                também por componentes que não exigem esse modo de operação, e a
                resposta aos movimentos pode ser desabilitada para evitar
                acionamento acidental; ou Existe um mecanismo para operar o
                controle de movimento de outra forma; ou O movimento é essencial
                para a funcionalidade, e desabilitá-lo invalidaria a atividade.
                Requisito 2.5.4 (A)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>2.5.4 (A)</p>
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
              <p className="font-bold">5.8.15 Controles com retorno</p>
              <p>
                Todos os controles têm um retorno (feedback) perceptível ao
                usuário quando são acionados. Recomendação 1.3.3 (A) 4.1.3 (AA)
              </p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>
            <td>
              <p>1.3.3 (A)</p>
              <p>4.1.3 (AA)</p>
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

export default TabelaC8;
