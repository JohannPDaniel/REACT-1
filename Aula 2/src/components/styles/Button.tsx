import styled from 'styled-components';
export const Button = styled.button`
	color: #fff;
	background-color: ${({ theme }) => theme.primaryColor};
	border: 1px solid ${({ theme }) => theme.primaryColor};
	border-radius: 8px;
	padding: 12px 20px;
	cursor: pointer;
	font-weight: 600;

	&:hover {
		background-color: ${({ theme }) => theme.primaryColor};
		border: 1px solid ${({ theme }) => theme.primaryColor};
        opacity: 80%;
		box-shadow: 0 0 0 2px rgb(40, 230, 200, 0.5);
	}

	&:disabled {
		background-color: #ccc;
		border: 1px solid #ccc;
		box-shadow: none;
		cursor: auto;
	}
`
