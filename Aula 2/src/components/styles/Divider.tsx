// instale o Styled-Components com o comando: npm install styled-components

import styled from 'styled-components';

export const Divider = styled.hr`
	margin: 10px 0;
	border: 1px solid;
	color: ${({ theme }) => theme.dividerColor};
`;
