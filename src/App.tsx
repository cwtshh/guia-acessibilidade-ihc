import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import Heuristicas from "./pages/heuristicas/Heuristicas";
import JornadaUsuario from "./pages/jornada-usuario/JornadaUsuario/JornadaUsuario";
import AcessibilidadeDigital from "./pages/acessibilidade-digital/AcessibilidadeDigital";
import Wcag from "./pages/wcag/Wcag";
import Abnt from "./pages/abnt/Abnt";
import Fontes from "./pages/fontes/Fontes";
import TabelaC1 from "./pages/abnt/tabela-c1/TabelaC1";
import TabelaC2 from "./pages/abnt/tabela-c2/TabelaC2";
import TabelaC3 from "./pages/abnt/tabela-c3/TabelaC3";
import TabelaC4 from "./pages/abnt/tabela-c4/TabelaC4";
import Tabelac5 from "./pages/abnt/tabela-c5/Tabelac5";
import TabelaC6 from "./pages/abnt/tabela-c6/TabelaC6";
import TabelaC7 from "./pages/abnt/tabela-c7/TabelaC7";
import TabelaC8 from "./pages/abnt/tabela-c8/TabelaC8";
import TabelaC9 from "./pages/abnt/tabela-c9/TabelaC9";
import Tabelac10 from "./pages/abnt/tabela-c10/Tabelac10";
import TabelaC11 from "./pages/abnt/tabela-c11/TabelaC11";

function App() {
  return (
    <div className="h-screen flex flex-col text-black">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heuristicas" element={<Heuristicas />} />
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
        <Route path="/abnt/tabela/c7" element={<TabelaC7 />} />
        <Route path="/abnt/tabela/c8" element={<TabelaC8 />} />
        <Route path="/abnt/tabela/c9" element={<TabelaC9 />} />
        <Route path="abnt/tabela/c10" element={<Tabelac10 />} />
        <Route path="/abnt/tabela/c11" element={<TabelaC11 />} />
        <Route path="/fontes" element={<Fontes />} />
      </Routes>
    </div>
  );
}

export default App;
