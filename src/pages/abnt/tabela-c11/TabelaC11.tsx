const TabelaC11 = () => {
  return (
    <div>
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
              <p className="font-bold">5.11.1 Uso de cores</p>
              <p>
                Não há elementos que fazem uso somente de cores para transmitir
                informações, indicar uma ação, pedir uma resposta ou distinguir
                um elemento visual. Requisito 1.4.1 (A)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.4.1 (A)</p>
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
                5.11.2 Contraste para texto (aprimorado)
              </p>
              <p>
                Todo conteúdo de texto, incluindo imagens de texto, tem relação
                de contraste de pelo menos 7:1 com o fundo; ou O conteúdo de
                texto está em tamanho grande e tem relação de contraste de pelo
                menos 4,5:1 com o fundo; ou O texto faz parte de um logotipo ou
                está em plano secundário. NOTA Cumprindo o descrito neste item,
                cumpre-se também o item 5.11.3, Contraste para texto (mínimo).
                Recomendação 1.4.3 (AA) 1.4.6 (AAA)
              </p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>
            <td>
              <p>1.4.3 (AA)</p>
              <p>1.4.6 (AAA)</p>
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
              <p className="font-bold">5.11.3 Contraste para texto (mínimo)</p>
              <p>
                Todo conteúdo de texto, incluindo imagens de texto, tem relação
                de contraste de pelo menos 4,5:1 com o fundo; ou O conteúdo de
                texto está em tamanho grande e tem relação de contraste de pelo
                menos 3:1 com o fundo; ou O texto faz parte de um logotipo ou
                está em plano secundário. Requisito 1.4.3 (AA)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.4.3 (AA)</p>
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
              <p className="font-bold">5.11.4 Contraste para componentes</p>
              <p>
                Todos os componentes de interface têm relação de contraste de
                pelo menos 3:1 com o fundo e entre seus estados; ou O componente
                está em estado inativo. Requisito 1.4.11 (AA)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.4.11 (AA)</p>
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
                5.11.5 Contraste para objetos gráficos
              </p>
              <p>
                Todas as partes de objetos gráficos necessárias para compreender
                o conteúdo têm relação de contraste de pelo menos 3:1 com o
                fundo e entre si; ou A apresentação específica dos objetos
                gráficos é essencial para a informação transmitida. Requisito
                1.4.11 (AA)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.4.11 (AA)</p>
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
                5.11.6 Contraste para indicador de foco visível
              </p>
              <p>
                O indicador de foco visível dos elementos focáveis tem relação
                de contraste de pelo menos 3:1 com o fundo e entre os estados em
                foco e sem foco. Requisito 1.4.11 (AA) 2.4.13 (AAA)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.4.11 (AA)</p>
              <p>2.4.13 (AAA)</p>
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

export default TabelaC11;
