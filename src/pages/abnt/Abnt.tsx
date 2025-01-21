import bg from "../../assets/bg/gradient_2.jpg";
import abnt_gb from "../../assets/abnt/image.png";
import { useNavigate } from "react-router-dom";

const Abnt = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 text-white"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src={abnt_gb}
          className="h-56 sm:h-80 w-full sm:w-auto object-contain"
          alt="Projeto ABNT"
        />
        <div className="text-center sm:text-left">
          <h1 className="font-bold text-lg sm:text-xl">
            PROJETO ABNT NBR 17225
          </h1>
          <p className="leading-relaxed">
            O Projeto ABNT NBR 17225 estabelece requisitos de acessibilidade
            para conteúdos e aplicações web, visando eliminar barreiras de
            acesso para pessoas com deficiência. Este projeto foi elaborado pela
            Comissão de Estudo de Acessibilidade para a Inclusão Digital e segue
            as Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.2). O
            objetivo é otimizar o acesso a ambientes virtuais para todos,
            especialmente aqueles com necessidades de acessibilidade.
          </p>
        </div>
      </div>

      <div className="p-4 sm:p-6 flex flex-col gap-5">
        <h2 className="font-bold text-lg sm:text-xl">
          Objetivos principais da norma:
        </h2>

        <ul className="list-decimal list-inside ml-4">
          <li>
            <strong>Facilitar o Acesso:</strong> Eliminar ou mitigar barreiras
            para pessoas com necessidades de acessibilidade, especialmente
            aquelas com deficiências.
          </li>

          <li>
            <strong>Conformidade com Normas:</strong> Atender às Diretrizes de
            Acessibilidade para Conteúdo Web 2.2 (WCAG 2.2) para garantir a
            acessibilidade em ambientes virtuais.
          </li>

          <li>
            <strong>Melhorar a Usabilidade:</strong> Implementar práticas que
            promovam uma experiência acessível e confortável para todos os
            usuários, incluindo aqueles com habilidades cognitivas, de linguagem
            e de aprendizagem limitadas.
          </li>
        </ul>

        <h2 className="font-bold text-lg sm:text-xl">Aplicações</h2>

        <p className="leading-relaxed">
          As aplicações incluem tecnologia assistiva, como leitores de tela,
          ampliadores de tela e softwares de conversão de texto para fala, que
          ajudam usuários com deficiências a interagir com conteúdo digital.
          Também se aplicam diretrizes para garantir que aplicativos móveis
          sejam utilizáveis por pessoas com diferentes tipos de deficiência.
          Além disso, a implementação de práticas de acessibilidade em websites
          e aplicações web, seguindo normas como WCAG e ARIA, assegura que todos
          os usuários possam acessar e interagir com o conteúdo.
        </p>

        <h2 className="font-bold text-lg sm:text-xl">Checklists</h2>
        <p>
          O projeto ABNT NBR 17225 disponibiliza checklists especializados para
          a avaliação da qualidade da acessibilidade em websites. Esses
          instrumentos fornecem uma abordagem estruturada para identificar e
          corrigir barreiras de acesso, assegurando a conformidade com os
          requisitos estabelecidos e promovendo uma experiência inclusiva para
          todos os usuários.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-2">
          <button
            onClick={() => navigate("/abnt/tabela/c1")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.1 - Interação por teclado
          </button>

          <button
            onClick={() => navigate("/abnt/tabela/c2")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.2 - Imagens
          </button>

          <button
            onClick={() => navigate("/abnt/tabela/c3")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.3 – Cabeçalhos
          </button>

          <button
            onClick={() => navigate("/abnt/tabela/c4")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.4 – Regiões
          </button>

          <button
            onClick={() => navigate("/abnt/tabela/c5")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.5 – Listas
          </button>

          <button
            onClick={() => navigate("/abnt/tabela/c6")}
            className="btn bg-primary-800 text-white w-full sm:w-auto"
          >
            Tabela C.6 – Tabelas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Abnt;
