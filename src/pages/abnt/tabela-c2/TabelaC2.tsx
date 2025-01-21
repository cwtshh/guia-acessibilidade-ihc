const TabelaC2 = () => {
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
              <p className="font-bold">
                5.2.1 Texto alternativo para imagens de conteúdo
              </p>
              <p>
                Todas as imagens que transmitem informação ou conteúdo relevante
                possuem texto alternativo que descreve essa informação ou
                conteúdo.
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.1.1 (A)</p>
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
                5.2.2 Texto alternativo para imagens funcionais
              </p>
              <p>
                Todas as imagens funcionais possuem texto alternativo que
                descreve a funcionalidade do elemento.
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.1.1 (A)</p>
              <p>2.4.4 (A)</p>
              <p>2.4.9 (AAA)</p>
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
                5.2.3 Texto alternativo para imagens decorativas
              </p>
              <p>
                Todas as imagens decorativas possuem texto alternativo vazio ou
                estão implementadas de outra forma, de modo que podem ser
                ignoradas por tecnologia assistiva.
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.1.1 (A)</p>
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
                5.2.4 Descrição para imagens complexas
              </p>
              <p>
                Todas as imagens complexas possuem texto alternativo que as
                identifica e têm descrição detalhada disponível na página
                (próximo à respectiva imagem) ou em outra página indicada.
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.1.1 (A)</p>
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
              <p className="font-bold">5.2.5 Imagens de texto</p>
              <p>
                Não há imagens de texto; ou Todas as imagens de texto são
                essenciais e possuem texto alternativo com o mesmo conteúdo; ou
                É possível customizar as imagens de texto não essenciais e elas
                possuem texto alternativo com o mesmo conteúdo.
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.1.1 (A)</p>
              <p>1.4.5 (AA)</p>
              <p>1.4.9 (AAA)</p>
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
                5.2.6 Texto alternativo para mapas de imagens
              </p>
              <p>
                Todos os mapas de imagens possuem texto alternativo para cada
                área interativa.
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.1.1 (A)</p>
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

export default TabelaC2;
