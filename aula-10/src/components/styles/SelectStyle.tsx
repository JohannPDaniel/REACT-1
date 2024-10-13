// instale o Styled-Components com o comando: npm install styled-components

import styled from 'styled-components';

interface SelectStyleProps {
	maxWidth?: string;
}

export const SelectStyle = styled.select<SelectStyleProps>`
	width: 100%;
	max-width: ${({ maxWidth }) => maxWidth || '300px'};
	height: 50px;
	border-radius: 10px;
	font-size: 16px;
	padding-inline: 10px;
	margin-left: 10px;
	outline: 1px solid black;
`;
