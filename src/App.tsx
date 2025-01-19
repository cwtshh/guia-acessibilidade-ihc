import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import Heuristicas from "./pages/heuristicas/Heuristicas";
import JornadaUsuario from "./pages/jornada-usuario/JornadaUsuario/JornadaUsuario";
import AcessibilidadeDigital from "./pages/acessibilidade-digital/AcessibilidadeDigital";
import Wcag from "./pages/wcag/Wcag";

function App() {
  return (
    <div className="h-screen flex flex-col">
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
      </Routes>
    </div>
  );
}

export default App;
