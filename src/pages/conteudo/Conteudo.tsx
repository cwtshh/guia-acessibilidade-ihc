import bg from "../../assets/bg/gradient_2.jpg";
import { Link } from "react-router-dom";
import data from "../../json/conteudo/data.json";
import { useEffect, useState } from "react";

interface Topico {
  descricao: string;
  fonte: string;
}

interface Diretriz {
  categoria: string;
  topicos: Topico[];
}

const Conteudo = () => {
  const [topicos, setTipocos] = useState<Diretriz>();

  useEffect(() => {
    setTipocos(data);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div
        className="text-white p-6"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>Acessibilidade</li>
            <li>Conteúdo</li>
          </ul>
        </div>
        <h1 className="font-bold text-xl">Acessibilidade de Conteúdo</h1>
        <p>
          A "Acessibilidade de Conteúdo" garante que todos os usuários,
          independentemente de suas habilidades, possam acessar e compreender o
          conteúdo digital. Isso inclui práticas como o uso de texto alternativo
          em imagens, bom contraste entre texto e fundo, legendas para vídeos,
          navegação clara, formulários acessíveis e feedback para erros. A ideia
          é criar uma experiência inclusiva e fácil de usar para todos.
        </p>
      </div>

      <div className="p-6 flex flex-col gap-5">
        {topicos?.topicos.map((topico, index) => {
          return (
            <div
              key={index}
              className="card bg-base-100 shadow-xl w-full sm:w-80 md:w-96 transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="flex items-center">
                <div className="bg-primary-800 p-2 h-full  text-white">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox bg-white"
                  />
                </div>
                <div className="p-2 w-full h-full">
                  <h2 className=" md:text-xl ">{topico.descricao}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Conteudo;
