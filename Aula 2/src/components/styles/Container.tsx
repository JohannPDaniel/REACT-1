// instale o Styled-Components com o comando: npm install styled-components

import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	column-gap: 30px;
	width: 100%;
	height: auto;
	margin: auto;
	padding: 70px 0;
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
