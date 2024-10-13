// instale o Styled-Components com o comando: npm install styled-components

import styled from 'styled-components';

export const OpenModalButton = styled.button`
	width: 70px;
	height: 70px;
	border-radius: 50%;
	font-size: 35px;
	background-color: ${({ theme }) => theme.buttonColor};
	color: var(--branco-1);
	position: fixed;
	bottom: 30px;
	right: 30px;
	cursor: pointer;
	border: 1px solid var(--azul-13);

	&:hover {
		background-color: ${({ theme }) => theme.hoverColor};
	}
`;
