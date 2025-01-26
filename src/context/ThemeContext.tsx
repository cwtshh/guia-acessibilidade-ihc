import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextData {
  theme: string;
  setTheme: (theme: string) => void;
  handleThemeChange: () => void;
}

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("cupcake");

  const handleThemeChange = () => {
    const currentTheme = localStorage.getItem("theme") || "cupcake";
    if (currentTheme === "cupcake") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "cupcake");
      setTheme("cupcake");
    }
  };

  useEffect(() => {
    // Aplica o tema ao elemento HTML
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
