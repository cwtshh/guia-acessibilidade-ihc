import React from "react";

const TabelaC9 = () => {
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
              <p className="font-bold">5.9.1 Rótulo de campo</p>
              <p>
                Todos os campos de formulário possuem um rótulo que os
                identifica; ou O campo de formulário possui propósito
                visualmente evidente e um nome acessível que o identifica.
                Requisito 3.2.2 (A) 4.1.2 (A)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>3.2.2 (A)</p>
              <p>4.1.2 (A)</p>
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
              <p className="font-bold">5.9.2 Rótulo de campo previsível</p>
              <p>
                Todos os rótulos estão posicionados de maneira previsível em
                relação aos respectivos campos de formulário. Requisito 1.3.1
                (A) 3.3.2 (A)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.3.1 (A)</p>
              <p>3.3.2 (A)</p>
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
              <p className="font-bold">5.9.3 Rótulo de campo associado</p>
              <p>
                Todos os rótulos estão associados aos respectivos campos de
                formulário de forma programaticamente determinada. Requisito
                1.3.1 (A)
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
              <p className="font-bold">5.9.4 Rótulo de campo descritivo</p>
              <p>
                Todos os rótulos identificam o propósito do respectivo campo de
                formulário; ou O rótulo, em conjunto com o agrupamento do campo,
                identifica o propósito do respectivo campo de formulário.
                Requisito 2.4.6 (A)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>2.4.6 (A)</p>
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
              <p className="font-bold">5.9.5 Textos de ajuda previsíveis</p>
              <p>
                Todos os textos de ajuda estão posicionados de maneira
                previsível em relação aos campos do formulário. Requisito 3.3.2
                (A)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>3.3.2 (A)</p>
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
              <p className="font-bold">5.9.6 Campos relacionados</p>
              <p>
                Todos os campos de entrada relacionados possuem agrupamento
                determinado programaticamente. Requisito 1.3.1 (A)
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
              <p className="font-bold">5.9.7 Campos obrigatórios</p>
              <p>
                Todos os campos obrigatórios estão devidamente identificados, de
                forma que todos possam perceber. Requisito 3.3.2 (A)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>3.3.2 (A)</p>
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
              <p className="font-bold">5.9.8 Tipo de dado determinado</p>
              <p>
                Todos os campos de entrada têm seu tipo de dado determinado
                programaticamente. Requisito 1.3.5 (AA)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>1.3.5 (AA)</p>
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
              <p className="font-bold">5.9.9 Mensagem de erro descritiva</p>
              <p>
                Todas as mensagens de erro descrevem em texto qual é o erro e
                identificam qual é o campo com erro. Requisito 3.3.1 (A)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>3.3.1 (A)</p>
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
              <p className="font-bold">5.9.10 Sugestão de correção</p>
              <p>
                Todas as mensagens de erro fornecem sugestões de correção de
                entrada de dados, quando conhecidas; ou A sugestão de correção
                coloca em risco a segurança ou o propósito do conteúdo.
                Requisito 3.3.3 (AA)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>3.3.3 (AA)</p>
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
              <p className="font-bold">5.9.11 Prevenção de erro</p>
              <p>
                Todos os formulários permitem uma forma de reverter, verificar
                ou confirmar os dados. NOTA Cumprindo o descrito neste item,
                cumpre-se também o item 5.9.12, Prevenção de erro para
                formulários críticos. Recomendação 3.3.4 (AA) 3.3.6 (AAA)
              </p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>
            <td>
              <p>3.3.4 (AA)</p>
              <p>3.3.6 (AAA)</p>
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
                5.9.12 Prevenção de erro para formulários críticos
              </p>
              <p>
                Todos os formulários críticos permitem uma forma de reverter,
                verificar ou confirmar os dados. Requisito 3.3.4 (AA)
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>3.3.4 (AA)</p>
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
              <p className="font-bold">5.9.13 Ajuda contextual</p>
              <p>
                Há ajuda contextual, como instruções e dicas relevantes, que
                auxilia o usuário a preencher e enviar os formulários.
                Recomendação 3.3.5 (AAA)
              </p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>
            <td>
              <p>3.3.5 (AAA)</p>
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

export default TabelaC9;
