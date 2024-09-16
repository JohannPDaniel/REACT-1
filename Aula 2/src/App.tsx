import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './configs/global/GlobalStyle';
import { AppRoutes } from './configs/routes/AppRoutes';
import { lightTheme } from './configs/themes/lightTheme';
import { darkTheme } from "./configs/themes/darkTheme";

function App() {
	return (
		<ThemeProvider theme={lightTheme}>
			<AppRoutes />;
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
