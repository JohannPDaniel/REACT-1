import AppRoutes from "./config/routes/AppRoutes";
import { GlobalStyle } from "./config/global/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./config/themes";

function App() {
  return (
      <ThemeProvider theme={lightTheme}>
          <AppRoutes />
          <GlobalStyle />
      </ThemeProvider>
  );
}

export default App