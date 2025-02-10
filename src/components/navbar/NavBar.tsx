import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { themeChange } from "theme-change";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../../context/ThemeContext";

const NavBar = () => {
  const { theme, handleThemeChange } = useTheme();
  themeChange();
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
    "/": "Acessify",
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
    "/acessibilidade/web": "Acessibilidade na Digital",
    "/design": "Design",
    "/conteudo": "Conteúdo",
    "/acessibilidade/funcoes": "Funções de acessibilidade",
    "/acessibilidade/ferramentas": "Ferr. de acessibilidade",
    "/checklist/acessibilidade": "CheckList de Acessibilidade",
  };

  return (
    <div
      className={`${
        theme === "dark" ? "text-white" : "text-black"
      } navbar h-20 min-h-[80px] bg-base-100 shadow-md sticky top-0 z-50`}
    >
      <div className="flex-1">
        <Link
          to={"/"}
          className={`btn btn-ghost text-xl font-semibold ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <span className="hidden sm:block">Acessify</span>
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
              location.pathname === "/acessibilidade/web"
                ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                : "transition-all duration-300 ease-in-out"
            }`}
          >
            <Link
              to={"/acessibilidade/web"}
              className="transition-colors duration-300 hover:text-primary-600"
            >
              Acessibilidade na Digital
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

          <li
            className={`${
              location.pathname === "/acessibilidade/funcoes"
                ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                : "transition-all duration-300 ease-in-out"
            }`}
          >
            <Link
              to={"/acessibilidade/funcoes"}
              className="transition-colors duration-300 hover:text-primary-600"
            >
              Funcionalidades de Acessibilidade
            </Link>
          </li>

          <li
            className={`${
              location.pathname === "/acessibilidade/ferramentas"
                ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                : "transition-all duration-300 ease-in-out"
            }`}
          >
            <Link
              to={"/acessibilidade/ferramentas"}
              className="transition-colors duration-300 hover:text-primary-600"
            >
              Ferramentas de Acessibilidade
            </Link>
          </li>

          <li
            className={`${
              location.pathname === "/checklist/acessibilidade"
                ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                : "transition-all duration-300 ease-in-out"
            }`}
          >
            <Link
              to={"/checklist/acessibilidade"}
              className="transition-colors duration-300 hover:text-primary-600"
            >
              Checklist de Acessibilidade
            </Link>
          </li>

          <li>
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                checked={theme === "dark"}
                onChange={handleThemeChange}
              />

              {/* <MdOutlineLightMode />

              
              <MdOutlineDarkMode /> */}
              {theme === "dark" ? (
                <MdOutlineDarkMode className="text-xl fill-current transition-opacity duration-300 ease-in-out opacity-100" />
              ) : (
                <MdOutlineLightMode className="text-xl fill-current transition-opacity duration-300 ease-in-out opacity-100" />
              )}
            </label>
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
            <div className="flex justify-between mb-4">
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="theme-controller"
                  checked={theme === "dark"}
                  onChange={handleThemeChange}
                />

                {/* Ícone para o tema claro */}
                <svg
                  className="swap-off h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* Ícone para o tema escuro */}
                <svg
                  className="swap-on h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>

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
                  Acessibilidade Digital
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

              <li
                className={`${
                  location.pathname === "/acessibilidade/funcoes"
                    ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                    : "transition-all duration-300 ease-in-out"
                }`}
              >
                <Link
                  to={"/acessibilidade/funcoes"}
                  onClick={closeMenu}
                  className="text-lg font-medium transition-colors duration-300 hover:text-primary-600"
                >
                  Funcionalidades de Acessibilidade
                </Link>
              </li>

              <li
                className={`${
                  location.pathname === "/acessibilidade/ferramentas"
                    ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                    : "transition-all duration-300 ease-in-out"
                }`}
              >
                <Link
                  to={"/acessibilidade/ferramentas"}
                  onClick={closeMenu}
                  className="text-lg font-medium transition-colors duration-300 hover:text-primary-600"
                >
                  Ferramentas de Acessibilidade
                </Link>
              </li>

              <li
                className={`${
                  location.pathname === "/checklist/acessibilidade"
                    ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                    : "transition-all duration-300 ease-in-out"
                }`}
              >
                <Link
                  to={"/checklist/acessibilidade"}
                  onClick={closeMenu}
                  className="text-lg font-medium transition-colors duration-300 hover:text-primary-600"
                >
                  CheckList de Acessibilidade
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
