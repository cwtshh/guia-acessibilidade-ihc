const Tabelac10 = () => {
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
              <p className="font-bold">5.10.1 Características sensoriais</p>
              <p>
                Não há instruções para compreender e utilizar o conteúdo que
                dependem somente das características sensoriais dos componentes,
                como forma, cor, tamanho, localização visual, orientação e som.
                Requisito 1.3.3 (A)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.3.3 (A)</p>
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
              <p className="font-bold">5.10.2 Ordem de apresentação</p>
              <p>
                A apresentação dos elementos conforme aparecem na tela é tal que
                preserva o significado e a operabilidade. Requisito 1.3.2 (A)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.3.2 (A)</p>
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
              <p className="font-bold">5.10.3 Orientação de exibição</p>
              <p>
                O conteúdo não restringe sua visualização e operação a uma única
                orientação de exibição, como de retrato ou paisagem; ou A
                orientação específica de exibição é essencial. Requisito 1.3.4
                (AA)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.3.4 (AA)</p>
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
              <p className="font-bold">5.10.4 Design responsivo</p>
              <p>
                Não há perda de informação ou funcionalidade, nem barra de
                rolagem em duas dimensões para conteúdo de rolagem horizontal
                apresentado com altura equivalente a 256 pixels CSS; ou Não há
                perda de informação ou funcionalidade, nem barra de rolagem em
                duas dimensões para conteúdo de rolagem vertical apresentado com
                largura equivalente a 320 pixels CSS; ou O conteúdo exige
                leiaute bidimensional para uso ou significado (por exemplo,
                mapas, diagramas, vídeos, jogos, apresentações, tabelas de dados
                e interfaces). Requisito 1.4.10 (AA)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.4.10 (AA)</p>
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
                5.10.5 Área do indicador de foco visível
              </p>
              <p>
                O indicador de foco visível dos elementos focáveis tem área pelo
                menos equivalente ao perímetro do elemento com 2 pixels CSS de
                espessura. Recomendação 2.4.13 (AAA)
              </p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>
            <td>
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

export default Tabelac10;
