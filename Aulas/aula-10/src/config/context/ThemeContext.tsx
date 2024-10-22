import { createContext, useState } from "react";

type TTheme = "lightTheme" | "darkTheme";
interface ThemeContext {
    theme: TTheme;
    toggleTheme?: () => void;
}

interface ThemeContextProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContext>({
    theme: "lightTheme",
    toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState<TTheme>("lightTheme");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "lightTheme" ? "darkTheme" : "lightTheme"));
    };
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
