import { useEffect, useState } from "react";
import data from "../../json/acessibilidade-web/data.json";
import { Link } from "react-router-dom";
import bg from "../../assets/bg/gradient_2.jpg";
import data_design from "../../json/design/data.json";
import data_conteudo from "../../json/conteudo/data.json";

interface Topico {
  titulo: string;
  descricao: string;
  fonte: string;
}

interface Diretriz {
  categoria: string;
  topicos: Topico[];
}

interface D_Topico {
  descricao: string;
  fonte: string;
}

interface D_Diretriz {
  categoria: string;
  topicos: D_Topico[];
}

interface C_Topico {
  descricao: string;
  fonte: string;
}

interface C_Diretriz {
  categoria: string;
  topicos: C_Topico[];
}

const CheckListAcessibilidade = () => {
  const [checklist, setChecklist] = useState<Diretriz[]>(data);
  const [design, setDesign] = useState<D_Diretriz[]>(
    Object.values(data_design)
  );
  const [conteudo, setConteudo] = useState<C_Diretriz>(data_conteudo);

  useEffect(() => {
    setChecklist(data);
    setDesign(Object.values(data_design));
    setConteudo(data_conteudo);
  }, []);

  console.log(design);

  return (
    <div>
      <div
        className={`text-white p-6`}
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>CheckList de Acessibilidade</li>
          </ul>
        </div>
        <h1 className="font-bold text-xl">CheckList de Acessibilidade</h1>
        <p className="text-justify">
          Quando se fala em funcionalidades de acessibilidade no contexto de
          sites e aplicações, o foco é proporcionar recursos que permitam a
          pessoas com diferentes tipos de deficiência interagir de forma plena
          com o conteúdo.
        </p>
      </div>

      <div className="flex flex-col p-6 gap-4">
        <h1 className="font-bold text-xl">Acessibilidade Web</h1>
        {checklist.map((diretriz) => {
          return (
            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="bg-primary-800 text-white rounded-lg p-4">
                <h1 className="font-bold">
                  {diretriz.categoria.toUpperCase()}
                </h1>
              </div>
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th className="p-2">Tópico</th>
                      <th className="p-2">Descrição</th>
                      <th className="p-2">Funcionalidade Atendida</th>
                    </tr>
                  </thead>
                  <tbody>
                    {diretriz.topicos.map((topico) => {
                      return (
                        <tr>
                          <td className="p-2">{topico.titulo}</td>
                          <td className="p-2">{topico.descricao}</td>
                          <td className="p-2">
                            <input type="checkbox" className="checkbox" />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
        <h1 className="font-bold text-xl">Design</h1>
        {design.map((diretriz) => {
          return (
            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="bg-primary-800 text-white rounded-lg p-4">
                <h1 className="font-bold">
                  {diretriz.categoria.toUpperCase()}
                </h1>
              </div>
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th className="p-2">Descrição</th>
                      <th className="p-2">Funcionalidade Atendida</th>
                    </tr>
                  </thead>
                  <tbody>
                    {diretriz.topicos.map((topico) => {
                      return (
                        <tr>
                          <td className="p-2">{topico.descricao}</td>
                          <td className="p-2">
                            <input type="checkbox" className="checkbox" />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
        <h1 className="font-bold text-xl">Conteúdo</h1>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th className="p-2">Descrição</th>
                <th className="p-2">Funcionalidade Atendida</th>
              </tr>
            </thead>
            <tbody>
              {conteudo.topicos.map((topico) => {
                return (
                  <tr>
                    <td className="p-2">{topico.descricao}</td>
                    <td className="p-2">
                      <input type="checkbox" className="checkbox" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CheckListAcessibilidade;
