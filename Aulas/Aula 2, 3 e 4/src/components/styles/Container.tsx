// instale o Styled-Components com o comando: npm install styled-components

import styled from 'styled-components';

interface ContainerProps {
	flexDirection?: 'row' | 'column';
	gap?: string;
	isPadding?: boolean;
}

export const Container = styled.section<ContainerProps>`
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: ${({ gap }) => gap ?? 0};
	width: 100%;
	height: auto;
	margin: auto;
	padding: ${({isPadding}) => isPadding ? "0" : "70px 0"};
	max-width: 1040px;

	h1 {
		font-size: 2em;
		color: ${({ theme }) => theme.textColor};
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		row-gap: 30px;
	}
`;
