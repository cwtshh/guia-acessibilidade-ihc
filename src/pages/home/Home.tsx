import IntegrantesCard from "../../components/integrantes-card/IntegrantesCard";
import integrantes_data from "../../json/integrantes/data.json";
import chars from "../../assets/char/—Pngtree—we are hiring character illustration_6680830.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full sm:w-full flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-primary-500 p-6 text-white">
        <div className="w-full sm:w-2/3 flex flex-col gap-6">
          <h1 className="font-bold text-xl sm:text-2xl">
            Seja bem-vindo ao Guia de Acessibilidade do Grupo 9!
          </h1>
          <div className="text-justify text-lg sm:text-base md:text-lg lg:text-xl">
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

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => navigate("/wcag")} className="btn">
              WCAG
            </button>
            <button className="btn">ABNT</button>
            <button onClick={() => navigate("/heuristicas")} className="btn">
              Heurísticas de Nielsen
            </button>
            <button
              onClick={() => navigate("/acessibilidade-digital")}
              className="btn"
            >
              Guia de Boas Práticas para Acessibilidade Digital
            </button>
          </div>
        </div>

        <div className="w-full sm:w-1/3">
          <img
            src={chars}
            alt="Imagem do guia de acessibilidade"
            className="w-full sm:w-auto sm:h-[500px] object-contain"
          />
        </div>
      </div>

      <div className="p-6">
        <h1 className="font-bold text-xl sm:text-2xl mb-4">Integrantes:</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {integrantes_data.map((integrante, index: number) => {
            return <IntegrantesCard key={index} integrante={integrante} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
