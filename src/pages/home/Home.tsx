import IntegrantesCard from "../../components/integrantes-card/IntegrantesCard";
import integrantes_data from "../../json/integrantes/data.json";
import chars from "../../assets/char/—Pngtree—we are hiring character illustration_6680830.png";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/bg/gradient_2.jpg";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Home = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-5">
      <div
        className="w-full sm:w-full flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-full sm:w-2/3 flex flex-col gap-6">
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <FaHome />
              </li>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
            </ul>
          </div>
          <h1 className="font-bold text-xl sm:text-2xl">
            Seja bem-vindo ao Acessify!
          </h1>
          {/* Conteúdo colapsável */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              showMore ? "max-h-[500px]" : "max-h-[100px]"
            }`}
          >
            <p>
              Estamos entusiasmados em tê-lo conosco nesta jornada de
              aprendizado, onde a acessibilidade será colocada como um princípio
              central em todas as interfaces. Este guia foi desenvolvido como
              trabalho final para a disciplina de Interação Humano-Computador
              (IHC) da Universidade de Brasília (UnB), sob a orientação da
              professora Rejane.
            </p>
            <p>
              Nosso objetivo é proporcionar uma compreensão aprofundada sobre
              como tornar o mundo digital mais inclusivo, adotando as melhores
              práticas e utilizando ferramentas essenciais para garantir que
              todos, independentemente das suas necessidades ou habilidades,
              possam navegar e interagir com as interfaces digitais de forma
              eficaz e agradável.
            </p>
          </div>

          <div
            role="button"
            aria-label="Ver Mais - Clique Para exibir o conteúdo de forma completa"
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 justify-center underline sm:hidden transition-opacity duration-300 hover:opacity-80"
          >
            {showMore ? (
              <>
                <MdOutlineKeyboardArrowUp />
                Ver Menos
              </>
            ) : (
              <>
                <MdOutlineKeyboardArrowDown />
                Ver Mais
              </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              aria-label="Acessibilidade na Digital"
              onClick={() => navigate("/acessibilidade/web")}
              className="btn bg-white text-black rounded-full"
            >
              Acessibilidade na Digital
            </button>

            <button
              aria-label="Diretrizes de Design"
              onClick={() => navigate("/design")}
              className="btn bg-white text-black rounded-full"
            >
              Design
            </button>

            <button
              aria-label="Diretrizes de Conteúdo"
              onClick={() => navigate("/conteudo")}
              className="btn bg-white text-black rounded-full"
            >
              Conteúdo
            </button>

            <button
              aria-label="Funcionalidades de Acessibilidade"
              onClick={() => navigate("/acessibilidade/funcoes")}
              className="btn bg-white text-black rounded-full"
            >
              Funcionalidades de acessibilidade
            </button>

            <button
              aria-label="Ferramentas de Acessibilidade"
              onClick={() => navigate("/acessibilidade/ferramentas")}
              className="btn bg-white text-black rounded-full"
            >
              Ferramentas de acessibilidade
            </button>

            <button
              aria-label="CheckList de Acessibilidade"
              onClick={() => navigate("/checklist/acessibilidade")}
              className="btn bg-white text-black rounded-full"
            >
              CheckList de Acessibilidade
            </button>
          </div>
        </div>

        <div className="w-full sm:w-1/3">
          <img
            src={chars}
            alt="Imagem ilustrativa do guia de acessibilidade"
            className="w-full sm:w-auto sm:h-[500px] object-contain"
          />
        </div>
      </div>

      <div className="p-6">
        <h1 className="font-bold text-xl sm:text-2xl mb-4">Integrantes:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {integrantes_data.map((integrante, index: number) => {
            return <IntegrantesCard key={index} integrante={integrante} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
