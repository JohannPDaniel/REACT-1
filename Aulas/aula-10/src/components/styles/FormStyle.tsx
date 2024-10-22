// instale o Styled-Components com o comando: npm install styled-components

import styled from 'styled-components';

type TFlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';
type TAlignItems = 'center' | 'start' | 'end';
type TJustifyContent =
	| 'center'
	| 'start'
	| 'end'
	| 'space-around'
	| 'space-between'
    | 'space-evenly';

interface FormProps {
	flexDirection?: TFlexDirection;
	alignItems?: TAlignItems;
    justifyContent?: TJustifyContent;
    gap?: string;
}

export const FormStyle = styled.form<FormProps>`
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
	align-items: ${({ alignItems }) => alignItems};
	justify-content: ${({ justifyContent }) => justifyContent};
	gap: ${({ gap }) => gap};

	> div {
		width: 100%;
		display: flex;
		justify-content: end;
		gap: 10px;
		padding-right: 10px
	}
`;
