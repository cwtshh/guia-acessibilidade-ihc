const TabelaC1 = () => {
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
              <p className="font-bold">5.1.1 Indicador de foco visível</p>
              <p>
                Todos os elementos focáveis possuem um indicador de foco
                visível.
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>2.4.7 (AA)</td>
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
                5.1.2 Elemento em foco totalmente visível
              </p>
              <p>
                Todos os elementos focáveis estão completamente visíveis quando
                recebem foco. NOTA Cumprindo o descrito neste item, cumpre-se
                também o item 5.1.3, Elemento em foco parcialmente visível.
              </p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>
            <td>
              <p>2.4.11 (AA)</p>
              <p>2.4.12 (AAA)</p>
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
                5.1.3 Elemento em foco parcialmente visível
              </p>
              <p>
                Todos os elementos focáveis estão pelo menos parcialmente
                visíveis quando recebem foco, considerando a sobreposição por
                elementos de autoria do desenvolvedor.
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>2.4.11 (AA)</p>
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
              <p className="font-bold">5.1.4 Ordem de foco previsível</p>
              <p>
                Todos os elementos focáveis recebem foco em ordem sequencial
                lógica e intuitiva, consistente com a apresentação e que
                preserva o significado e a operabilidade.
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>2.4.3 (A)</p>
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
              <p className="font-bold">5.1.5 Uso de foco</p>
              <p></p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>

            <td>
              <p>2.1.1 (A)</p>
              <p>2.1.3 (AAA)</p>
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
              <p className="font-bold">5.1.6 Armadilha de foco</p>
              <p>
                Não há componentes que bloqueiam, impedem ou interrompem a
                navegação por teclado
              </p>
            </td>

            <td>
              <p>Requisito</p>
            </td>

            <td>
              <p>1.4.13 (AA)</p>
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
              <p className="font-bold">5.1.7 Conteúdo adicional</p>
              <p>
                Não há conteúdo adicional que seja exibido somente pelo foco do
                teclado ou posicionamento do cursor.
              </p>
              <p className="italic">
                NOTA Cumprindo o descrito neste item, cumpre-se também os itens
                5.1.8, Conteúdo adicional persistente, e 5.1.9, Conteúdo
                adicional dispensável.
              </p>
            </td>

            <td>
              <p>Recomendação</p>
            </td>

            <td>
              <p>1.4.13 (AA)</p>
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
              <p className="font-bold">5.1.8 Conteúdo adicional persistente</p>
              <p>
                Todo conteúdo adicional exibido por foco do teclado ou
                posicionamento do cursor permanece visível até que o usuário
                retire o foco, posicione o cursor fora do componente ou
                dispense-o de outra forma, ou até que a informação transmitida
                pelo conteúdo deixe de ser válida.
              </p>
            </td>

            <td>
              <p>Requisito</p>
            </td>

            <td>
              <p>1.4.13 (AA)</p>
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
              <p className="font-bold">5.1.9 Conteúdo adicional dispensável</p>
              <p>
                Todo conteúdo adicional exibido por foco do teclado ou
                posicionamento do cursor pode ser dispensado sem a necessidade
                de retirar o foco ou reposicionar o cursor; ou O conteúdo
                adicional exibido comunica um erro de entrada, ou não oculta ou
                substitui outro conteúdo
              </p>
            </td>

            <td>
              <p>Requisito</p>
            </td>

            <td>
              <p>1.4.13 (AA)</p>
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
              <p className="font-bold">5.1.10 Atalhos de teclado</p>
              <p>
                Não há atalhos de teclado que utilizam uma única tecla, de forma
                que sempre haja a presença de uma tecla modificadora (como Ctrl
                ou Alt).
              </p>
              <p className="italic">
                NOTA Cumprindo o descrito neste item, cumpre-se também o item
                5.1.11, Atalhos de teclado sem tecla modificadora.
              </p>
            </td>

            <td>
              <p>Recomendação</p>
            </td>

            <td>
              <p>1.4.13 (AA)</p>
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
                5.1.11 Atalhos de teclado sem tecla modificadora
              </p>
              <p>
                Há um mecanismo simples para desativar ou remapear o atalho de
                teclado sem tecla modificadora; ou O atalho só é acionado quando
                um componente específico está em foco.
              </p>
            </td>

            <td>
              <p>Requisito</p>
            </td>

            <td>
              <p>Requisito</p>
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
                5.1.12 Acessibilidade por teclado total
              </p>
              <p>
                Todas as funcionalidades da página são acessíveis com o teclado,
                sem exceção.
              </p>
              <p className="italic">
                NOTA Cumprindo o descrito neste item, cumpre-se também o item
                5.1.13, Acessibilidade por teclado parcial.
              </p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>
            <td>
              <p>2.1.1 (A)</p>
              <p>2.1.3 (AAA)</p>
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
                5.1.13 Acessibilidade por teclado parcial
              </p>
              <p>
                Todas as funcionalidades da página que não são acessíveis pelo
                teclado não admitem modo de operação equivalente utilizando
                somente o teclado (por exemplo, desenho à mão livre).
              </p>
            </td>
            <td>
              <p>Requisito</p>
            </td>
            <td>
              <p>2.1.1 (A)</p>
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
                5.1.14 Mecanismos de entrada simultâneos
              </p>
              <p>
                Não há funcionalidade na página que restringe o uso de algum
                mecanismo de entrada disponível; ou A restrição do uso do
                mecanismo de entrada específico é essencial, necessária para
                garantir a segurança do conteúdo ou para respeitar as
                configurações do usuário.
              </p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>
            <td>
              <p>2.5.6 (AAA)</p>
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
                5.1.15 Comportamento de componentes customizados
              </p>
              <p>
                Todos os componentes customizados possuem comportamento
                previsível.
              </p>
              <p className="italic">
                NOTA Cumprindo o descrito neste item, cumpre-se também o item
                5.1.16, Instruções para componentes customizados.
              </p>
            </td>
            <td>
              <p>Recomendação</p>
            </td>
            <td>
              <p>2.1.1 (A)</p>
              <p>2.1.3 (AAA)</p>
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
                5.1.16 Instruções para componentes customizados
              </p>
              <p>
                Todos os componentes customizados que exigem interações
                complexas e comportamento não previsível possuem instruções para
                operação.
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
        </tbody>
      </table>
    </div>
  );
};

export default TabelaC1;
