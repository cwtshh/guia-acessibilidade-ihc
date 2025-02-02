import { useEffect, useState } from "react";
import data from "../../json/acessibilidade-web/data.json";
import { Link } from "react-router-dom";
import bg from "../../assets/bg/gradient_2.jpg";
import data_design from "../../json/design/data.json";
import data_conteudo from "../../json/conteudo/data.json";
import { useTheme } from "../../context/ThemeContext";
import { IoMdAlert } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";

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
  const { theme } = useTheme();
  const [checklist, setChecklist] = useState<Diretriz[]>(data);
  const [design, setDesign] = useState<D_Diretriz[]>(
    Object.values(data_design)
  );
  const [conteudo, setConteudo] = useState<C_Diretriz>(data_conteudo);

  // Pontuação por categoria
  const [scoreAcessibilidade, setScoreAcessibilidade] = useState(0);
  const [scoreDesign, setScoreDesign] = useState(0);
  const [scoreConteudo, setScoreConteudo] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // const total_pontos_possiveis = () => {
  //   return (
  //     checklist.reduce((acc, diretriz) => acc + diretriz.topicos.length, 0) +
  //     design.reduce((acc, diretriz) => acc + diretriz.topicos.length, 0) +
  //     conteudo.topicos.length
  //   );
  // };

  const handleShowResults = () => {
    setShowResults(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setChecklist(data);
    setDesign(Object.values(data_design));
    setConteudo(data_conteudo);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isDarkTheme = theme === "dark";
  const bgColor = isDarkTheme ? "bg-gray-800" : "bg-white";
  const textColor = isDarkTheme ? "text-gray-200" : "text-gray-800";

  // Função para atualizar a pontuação
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    categoria: string
  ) => {
    if (event.target.checked) {
      if (categoria === "Acessibilidade Web") {
        setScoreAcessibilidade((prevScore) => prevScore + 1);
      } else if (categoria === "Design") {
        setScoreDesign((prevScore) => prevScore + 1);
      } else if (categoria === "Conteúdo") {
        setScoreConteudo((prevScore) => prevScore + 1);
      }
    } else {
      if (categoria === "Acessibilidade Web") {
        setScoreAcessibilidade((prevScore) => prevScore - 1);
      } else if (categoria === "Design") {
        setScoreDesign((prevScore) => prevScore - 1);
      } else if (categoria === "Conteúdo") {
        setScoreConteudo((prevScore) => prevScore - 1);
      }
    }
  };

  const get_acessibilidade_percentage = () => {
    const total_pontos_possiveis = checklist.reduce((acc, check) => {
      return acc + check.topicos.length;
    }, 0);
    return (scoreAcessibilidade / total_pontos_possiveis).toFixed(1);
  };

  const get_design_percentage = () => {
    const total_pontos_possiveis = design.reduce((acc, check) => {
      return acc + check.topicos.length;
    }, 0);
    return (scoreDesign / total_pontos_possiveis).toFixed(1);
  };

  const get_conteudo_percentage = () => {
    const total_pontos_possiveis = conteudo.topicos.length;
    return (scoreConteudo / total_pontos_possiveis).toFixed(1);
  };

  const consideracoes_finais = () => {
    const acessibilidade = Number(get_acessibilidade_percentage()) * 100;
    const design = Number(get_design_percentage()) * 100;
    const conteudo = Number(get_conteudo_percentage()) * 100;

    let mensagem = "Análise das diretrizes:\n";

    // Acessibilidade
    if (acessibilidade <= 40) {
      mensagem +=
        "1. <strong>Acessibilidade</strong>: A cobertura das diretrizes de acessibilidade está abaixo do recomendado. Sugerimos melhorias para garantir a conformidade total com os requisitos de acessibilidade e proporcionar uma experiência mais inclusiva para todos os usuários.\n";
    } else if (acessibilidade <= 80) {
      mensagem +=
        "1. <strong>Acessibilidade</strong>: A cobertura das diretrizes de acessibilidade é parcial. Recomendamos a ampliação das práticas adotadas para alcançar uma conformidade mais abrangente.\n";
    } else {
      mensagem +=
        "1. <strong>Acessibilidade</strong>: A cobertura das diretrizes de acessibilidade está adequada, atendendo às principais práticas e requisitos necessários.\n";
    }

    // Design
    if (design <= 40) {
      mensagem +=
        "2. <strong>Design</strong>: O design não segue as diretrizes de forma suficiente. Recomendamos a revisão e a implementação de melhorias no design para otimizar a experiência do usuário.\n";
    } else if (design <= 80) {
      mensagem +=
        "2. <strong>Design</strong>: O design atende parcialmente às diretrizes. Aconselhamos ajustes para melhorar a experiência do usuário e garantir maior conformidade.\n";
    } else {
      mensagem +=
        "2. <strong>Design</strong>: O design está em conformidade com as principais diretrizes de usabilidade e estética.\n";
    }

    // Conteúdo
    if (conteudo <= 40) {
      mensagem +=
        "3. <strong>Conteúdo</strong>: O conteúdo não cobre adequadamente as diretrizes. Sugerimos uma revisão para garantir que o conteúdo seja claro, acessível e relevante para todos os usuários.\n";
    } else if (conteudo <= 80) {
      mensagem +=
        "3. <strong>Conteúdo</strong>: O conteúdo atende parcialmente às diretrizes. A ampliação de conteúdo e melhorias nas práticas de comunicação podem contribuir para maior clareza e acessibilidade.\n";
    } else {
      mensagem +=
        "3. <strong>Conteúdo</strong>: O conteúdo está em conformidade com as melhores práticas, sendo claro e acessível para os usuários.\n";
    }

    // Substitui as quebras de linha por <br />
    return mensagem.replace(/\n/g, "<br />");
  };

  const ConsideracoesFinais = () => {
    const consideracoes = consideracoes_finais();
    return <p dangerouslySetInnerHTML={{ __html: consideracoes }} />;
  };

  return (
    <div>
      <div
        className={`text-white p-6`}
        style={{ backgroundImage: `url(${bg})` }}
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
        <div
          className={`${
            showResults ? "" : "hidden"
          } ${bgColor} p-4 rounded-lg flex flex-col gap-4`}
        >
          <h2 className="font-bold text-xl">Resultados</h2>
          <div className="flex flex-col sm:flex-row sm:gap-5 lg:justify-center lg:gap-64">
            {/* Acessibilidade Web */}
            <div className="bg-primary-800 text-white rounded-lg p-4 flex flex-col gap-4 items-center justify-center sm:w-44 w-full mb-4 sm:mb-0">
              <div
                className="radial-progress"
                style={
                  {
                    "--value": Number(get_acessibilidade_percentage()) * 100,
                  } as React.CSSProperties
                }
                role="progressbar"
              >
                {Number(get_acessibilidade_percentage()) * 100}%
              </div>
              <h3 className="font-bold text-center">Acessibilidade Web</h3>
              {Number(get_acessibilidade_percentage()) * 100 <= 40 && (
                <div
                  className="tooltip"
                  data-tip="Identificamos uma cobertura insuficiente das diretrizes. Sugerimos ampliá-la para garantir o cumprimento adequado."
                >
                  <div className="bg-white text-red-500 p-2 rounded-lg flex items-center justify-center">
                    <IoMdAlert className="text-4xl" />
                  </div>
                </div>
              )}
              {Number(get_acessibilidade_percentage()) * 100 > 40 &&
                Number(get_acessibilidade_percentage()) * 100 <= 70 && (
                  <div
                    className="tooltip"
                    data-tip="Verificamos uma cobertura parcial das diretrizes. Recomendamos sua ampliação para assegurar maior conformidade."
                  >
                    <div className="bg-white text-yellow-500 p-2 rounded-lg flex items-center justify-center">
                      <AiFillLike className="text-4xl" />
                    </div>
                  </div>
                )}

              {Number(get_acessibilidade_percentage()) * 100 >= 80 && (
                <div
                  className="tooltip"
                  data-tip="A cobertura das diretrizes está adequada, atendendo às principais práticas e requisitos necessários."
                >
                  <div className="bg-white text-green-500 p-2 rounded-lg flex items-center justify-center">
                    <FaCircleCheck className="text-4xl" />
                  </div>
                </div>
              )}
            </div>

            {/* Design */}
            <div className="bg-primary-800 text-white rounded-lg p-4 flex flex-col gap-4 items-center justify-center sm:w-44 w-full mb-4 sm:mb-0">
              <div
                className="radial-progress"
                style={
                  {
                    "--value": Number(get_design_percentage()) * 100,
                  } as React.CSSProperties
                }
                role="progressbar"
              >
                {Number(get_design_percentage()) * 100}%
              </div>
              <h3 className="font-bold text-center">Design</h3>
              {Number(get_design_percentage()) * 100 <= 40 && (
                <div
                  className="tooltip"
                  data-tip="Identificamos uma cobertura insuficiente das diretrizes. Sugerimos ampliá-la para garantir o cumprimento adequado."
                >
                  <div className="bg-white text-red-500 p-2 rounded-lg flex items-center justify-center">
                    <IoMdAlert className="text-4xl" />
                  </div>
                </div>
              )}
              {Number(get_design_percentage()) * 100 > 40 &&
                Number(get_design_percentage()) * 100 < 70 && (
                  <div
                    className="tooltip"
                    data-tip="Verificamos uma cobertura parcial das diretrizes. Recomendamos sua ampliação para assegurar maior conformidade."
                  >
                    <div className="bg-white text-yellow-500 p-2 rounded-lg flex items-center justify-center">
                      <AiFillLike className="text-4xl" />
                    </div>
                  </div>
                )}

              {Number(get_design_percentage()) * 100 >= 80 && (
                <div
                  className="tooltip"
                  data-tip="A cobertura das diretrizes está adequada, atendendo às principais práticas e requisitos necessários."
                >
                  <div className="bg-white text-green-500 p-2 rounded-lg flex items-center justify-center">
                    <FaCircleCheck className="text-4xl" />
                  </div>
                </div>
              )}
            </div>

            {/* Conteúdo */}
            <div className="bg-primary-800 text-white rounded-lg p-4 flex flex-col gap-4 items-center justify-center sm:w-44 w-full">
              <div
                className="radial-progress"
                style={
                  {
                    "--value": Number(get_conteudo_percentage()) * 100,
                  } as React.CSSProperties
                }
                role="progressbar"
              >
                {Number(get_conteudo_percentage()) * 100}%
              </div>
              <h3 className="font-bold text-center">Conteúdo</h3>
              {Number(get_conteudo_percentage()) * 100 <= 40 && (
                <div
                  className="tooltip"
                  data-tip="Identificamos uma cobertura insuficiente das diretrizes. Sugerimos ampliá-la para garantir o cumprimento adequado."
                >
                  <div className="bg-white text-red-500 p-2 rounded-lg flex items-center justify-center">
                    <IoMdAlert className="text-4xl" />
                  </div>
                </div>
              )}

              {Number(get_conteudo_percentage()) * 100 >= 80 && (
                <div
                  className="tooltip"
                  data-tip="A cobertura das diretrizes está adequada, atendendo às principais práticas e requisitos necessários."
                >
                  <div className="bg-white text-green-500 p-2 rounded-lg flex items-center justify-center">
                    <FaCircleCheck className="text-4xl" />
                  </div>
                </div>
              )}

              {Number(get_conteudo_percentage()) * 100 > 40 &&
                Number(get_conteudo_percentage()) * 100 < 70 && (
                  <div
                    className="tooltip"
                    data-tip="Verificamos uma cobertura parcial das diretrizes. Recomendamos sua ampliação para assegurar maior conformidade."
                  >
                    <div className="bg-white text-yellow-500 p-2 rounded-lg flex items-center justify-center">
                      <AiFillLike className="text-4xl" />
                    </div>
                  </div>
                )}
            </div>
          </div>
          <h2 className="font-bold text-xl">Score geral:</h2>
          {ConsideracoesFinais()}
        </div>

        <h1 className="font-bold text-xl">Acessibilidade Web</h1>
        {checklist.map((diretriz, index) => (
          <div key={index} className={`${bgColor} rounded-lg p-4 mb-4`}>
            <div className="bg-primary-800 text-white rounded-lg p-4">
              <h1 className="font-bold">{diretriz.categoria.toUpperCase()}</h1>
            </div>
            <div className="overflow-x-auto">
              <table
                className={`table ${
                  isDarkTheme ? `${bgColor} ${textColor}` : ``
                }`}
              >
                <thead>
                  <tr>
                    <th className="p-2">Tópico</th>
                    <th className="p-2">Descrição</th>
                    <th className="p-2 w-[10%] text-center">
                      Funcionalidade Atendida
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {diretriz.topicos.map((topico, i) => (
                    <tr key={i}>
                      <td className="p-2">{topico.titulo}</td>
                      <td className="p-2">{topico.descricao}</td>
                      <td className="p-2 text-center">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) =>
                            handleCheckboxChange(e, "Acessibilidade Web")
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <h1 className="font-bold text-xl">Design</h1>
        {design.map((diretriz, index) => (
          <div key={index} className={`${bgColor} rounded-lg p-4 mb-4`}>
            <div className="bg-primary-800 text-white rounded-lg p-4">
              <h1 className="font-bold">{diretriz.categoria.toUpperCase()}</h1>
            </div>
            <div className="overflow-x-auto">
              <table
                className={`table ${
                  isDarkTheme ? `${bgColor} ${textColor}` : ``
                }`}
              >
                <thead>
                  <tr>
                    <th className="p-2">Descrição</th>
                    <th className="p-2 w-[10%] text-center">
                      Funcionalidade Atendida
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {diretriz.topicos.map((topico, i) => (
                    <tr key={i}>
                      <td className="p-2">{topico.descricao}</td>
                      <td className="p-2 text-center">
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) => handleCheckboxChange(e, "Design")}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <h1 className="font-bold text-xl">Conteúdo</h1>
        <div className={`${bgColor} rounded-lg p-4 mb-4`}>
          <div className="overflow-x-auto">
            <table
              className={`table ${
                isDarkTheme ? `${bgColor} ${textColor}` : ``
              }`}
            >
              <thead>
                <tr>
                  <th className="p-2">Descrição</th>
                  <th className="p-2 w-[10%] text-center">
                    Funcionalidade Atendida
                  </th>
                </tr>
              </thead>
              <tbody>
                {conteudo.topicos.map((topico, i) => (
                  <tr key={i}>
                    <td className="p-2">{topico.descricao}</td>
                    <td className="p-2 text-center">
                      <input
                        type="checkbox"
                        className="checkbox"
                        onChange={(e) => handleCheckboxChange(e, "Conteúdo")}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <button
          onClick={handleShowResults}
          className="btn bg-primary-800 text-white"
        >
          Ver Resultados
        </button>
      </div>
    </div>
  );
};

export default CheckListAcessibilidade;
