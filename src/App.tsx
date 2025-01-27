import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import AcessibilidadeWeb from "./pages/acessibilidade-web/AcessibilidadeWeb";
import Design from "./pages/design/Design";
import Conteudo from "./pages/conteudo/Conteudo";
import FuncoesAcessibilidade from "./pages/funcoes-acessibilidade/FuncoesAcessibilidade";
import { themeChange } from "theme-change";
import FerramentasAcessibilidades from "./pages/ferramentas-acessibilidade/FerramentasAcessibilidades";

function App() {
  themeChange();
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acessibilidade/web" element={<AcessibilidadeWeb />} />
        <Route path="/design" element={<Design />} />
        <Route path="/conteudo" element={<Conteudo />} />
        <Route
          path="/acessibilidade/funcoes"
          element={<FuncoesAcessibilidade />}
        />
        <Route
          path="/acessibilidade/ferramentas"
          element={<FerramentasAcessibilidades />}
        />
        {/* <Route path="/heuristicas" element={<Heuristicas />} />
        <Route path="/jornada-usuario" element={<JornadaUsuario />} />
        <Route
          path="/acessibilidade-digital"
          element={<AcessibilidadeDigital />}
        />
        <Route path="/wcag" element={<Wcag />} />
        <Route path="/abnt" element={<Abnt />} />
        <Route path="/abnt/tabela/c1" element={<TabelaC1 />} />
        <Route path="/abnt/tabela/c2" element={<TabelaC2 />} />
        <Route path="/abnt/tabela/c3" element={<TabelaC3 />} />
        <Route path="/abnt/tabela/c4" element={<TabelaC4 />} />
        <Route path="/abnt/tabela/c5" element={<Tabelac5 />} />
        <Route path="/abnt/tabela/c6" element={<TabelaC6 />} />
        <Route path="/fontes" element={<Fontes />} /> */}
      </Routes>
    </div>
  );
}

export default App;
