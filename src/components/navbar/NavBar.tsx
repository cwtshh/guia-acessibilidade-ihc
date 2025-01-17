import React, { useState, useEffect, useRef } from "react";
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

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="flex-1">
        <Link
          to={"/"}
          className="btn btn-ghost text-xl font-semibold text-gray-800"
        >
          Guia de Acessibilidade - IHC
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
          <li className={`${location.pathname === "/" ? "active" : ""}`}>
            <Link
              to={"/"}
              className="transition-colors duration-300 hover:text-primary-600"
            >
              WCAG
            </Link>
          </li>
          <li>
            <a className="transition-colors duration-300 hover:text-primary-600">
              ABNT
            </a>
          </li>
          <li
            className={`${
              location.pathname === "/heuristicas"
                ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                : "hover:bg-primary-200 transition-all duration-300 ease-in-out"
            }`}
          >
            <Link
              to={"/heuristicas"}
              className="transition-colors duration-300 hover:text-primary-600"
            >
              Heurísticas de Nielsen
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
              <li className={`${location.pathname === "/" ? "active" : ""}`}>
                <Link
                  to={"/"}
                  onClick={closeMenu}
                  className="text-lg font-medium transition-colors duration-300 hover:text-primary-600"
                >
                  WCAG
                </Link>
              </li>
              <li>
                <a
                  onClick={closeMenu}
                  className="text-lg font-medium transition-colors duration-300 hover:text-primary-600"
                >
                  ABNT
                </a>
              </li>
              <li
                className={`${
                  location.pathname === "/heuristicas"
                    ? "bg-primary-600 text-white rounded-full transition-all duration-300 ease-in-out"
                    : "hover:bg-primary-200 transition-all duration-300 ease-in-out"
                }`}
              >
                <Link
                  to={"/heuristicas"}
                  onClick={closeMenu}
                  className="text-lg font-medium transition-colors duration-300 hover:text-primary-600"
                >
                  Heurísticas de Nielsen
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
