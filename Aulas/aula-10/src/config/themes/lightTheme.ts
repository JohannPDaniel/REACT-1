import { DefaultTheme } from 'styled-components';
import '../../components/styles/cores.css';

export const lightTheme: DefaultTheme = {
	// Page
	backgroundColor: 'var(--branco-10)',
	dividerColor: 'var(--cinza-3)',

	// Texto
	textColor_1: 'var(--preto-1)',
	textColor_2: 'var(--branco-1)',

	// Box-shadow
	boxShadow: 'var(--preto-1)',

	// Icone
	icone_1: 'none',
	icone_2: 'invert()',

	// Button
	buttonColor: 'var(--azul-1)',
	hoverColor: 'var(--azul-9)',
};
