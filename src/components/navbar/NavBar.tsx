import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Função para fechar o menu ao clicar fora dele
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Função para fechar o menu manualmente ao clicar no botão de fechar
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const NomePaginaMap: { [key: string]: string } = {
    "/": "Guia de Acessibilidade - IHC",
    // "/wcag": "WCAG",
    // "/abnt": "ABNT",
    // "/heuristicas": "Heurísticas de Nielsen",
    // "/acessibilidade-digital": "Acessibilidade Digital",
    // "/abnt/tabela/c1": "Tabela C.1 - Interação por teclado",
    // "/abnt/tabela/c2": "Tabela C.2 - Imagens",
    // "/abnt/tabela/c3": "Tabela C.3 - Cabeçalhos",
    // "/abnt/tabela/c4": "Tabela C.4 - Regiões",
    // "/abnt/tabela/c5": "Tabela C.5 - Listas",
    // "/abnt/tabela/c6": "Tabela C.6 - Tabelas",
    "/acessibilidade/web": "Acessibilidade na Web",
    "/design": "Design",
    "/conteudo": "Conteúdo",
  };

  return (
    <div className="navbar h-20 min-h-[80px] bg-base-100 shadow-md sticky top-0 z-50">
      <div className="flex-1">
        <Link
          to={"/"}
          className="btn btn-ghost text-xl font-semibold text-gray-800"
        >
          <span className="hidden sm:block">Guia de Acessibilidade - IHC</span>
          <span className="block sm:hidden">
            {NomePaginaMap[location.pathname as keyof typeof NomePaginaMap]}
          </span>
        </Link>
      </div>

      {/* Menu */}
      <div className="flex-none lg:hidden">
        <button
          onClick={toggleMenu}
          className="btn btn-ghost"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li
            className={`${
              location.pathname === "/wcag"
                ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                : "transition-all duration-300 ease-in-out"
            }`}
          >
            <Link
              to={"/acessibilidade/web"}
              className={`${
                location.pathname === "/acessibilidade/web"
                  ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                  : "transition-all duration-300 ease-in-out"
              }`}
            >
              Acessibilidade na Web
            </Link>
          </li>
          <li
            className={`${
              location.pathname === "/Design"
                ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                : "transition-all duration-300 ease-in-out"
            }`}
          >
            <Link
              to={"/Design"}
              className="transition-colors duration-300 hover:text-primary-600"
            >
              Design
            </Link>
          </li>
          <li
            className={`${
              location.pathname === "/conteudo"
                ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                : "transition-all duration-300 ease-in-out"
            }`}
          >
            <Link
              to={"/conteudo"}
              className="transition-colors duration-300 hover:text-primary-600"
            >
              Conteúdo
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden absolute top-0 left-0 w-full bg-base-100 z-10 p-6 transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
        style={{
          transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
        }}
      >
        {isMobileMenuOpen && (
          <div>
            <div className="flex justify-end mb-4">
              <button
                onClick={closeMenu}
                className="btn btn-ghost text-xl"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="menu space-y-4">
              <li>
                <Link
                  to={"/"}
                  onClick={closeMenu}
                  className="text-lg font-medium transition-colors duration-300 hover:text-primary-600"
                >
                  Voltar ao início
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/acessibilidade/web"
                    ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                    : "transition-all duration-300 ease-in-out"
                }`}
              >
                <Link
                  to={"/acessibilidade/web"}
                  onClick={closeMenu}
                  className="text-lg font-medium transition-colors duration-300 hover:text-primary-600"
                >
                  Acessibilidade na Web
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/design"
                    ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                    : "transition-all duration-300 ease-in-out"
                }`}
              >
                <Link
                  to={"/design"}
                  onClick={closeMenu}
                  className="text-lg font-medium transition-colors duration-300 hover:text-primary-600"
                >
                  Design
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/conteudo"
                    ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                    : "transition-all duration-300 ease-in-out"
                }`}
              >
                <Link
                  to={"/conteudo"}
                  onClick={closeMenu}
                  className="text-lg font-medium transition-colors duration-300 hover:text-primary-600"
                >
                  Conteúdo
                </Link>
              </li>

              <li>
                <Link
                  to={"/acessibilidade-digital"}
                  onClick={closeMenu}
                  className="text-lg font-medium transition-colors duration-300 hover:text-primary-600"
                >
                  Guia de Boas Práticas para Acessibilidade Digital
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
