import 'styled-components';
type TLightDark = 'none' | 'invert()';

declare module 'styled-components' {
	export interface DefaultTheme {
		backgroundColor: string;
		textColor: string;
		dividerColor: string;
		boxShadow: string;
		icone_1: TLightDark;
		icone_2: TLightDark;
		buttonColor: string;
		hoverColor: string;
	}
}
