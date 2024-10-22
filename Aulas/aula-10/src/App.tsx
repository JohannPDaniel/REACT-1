import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./config/context/ThemeContext";
import { GlobalStyle } from "./config/global/GlobalStyle";
import AppRoutes from "./config/routes/AppRoutes";
import { darkTheme, lightTheme } from "./config/themes";
function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <AppRoutes />
        </ThemeProvider>
    );
}

export default App;
