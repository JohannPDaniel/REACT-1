import styled from 'styled-components';

export const Table = styled.table`
	width: 100%;
	max-width: 700px;
	border-spacing: 0px;
	border-radius: 10px 10px 0 0;
	border: 1px solid ${({ theme }) => theme.textColor};

	thead {
		tr {
			height: 30px;
		}

		th {
			border: 1px solid ${({ theme }) => theme.textColor};
			padding: 10px;

			&:nth-child(1) {
				border-radius: 10px 0 0 0;
			}

			&:nth-child(6) {
				border-radius: 0px 10px 0 0;
			}
		}
	}

	tbody {
		tr {
			height: 30px;
		}
		td {
			border: 1px solid ${({ theme }) => theme.textColor};
			padding: 10px;
		}
	}
`;
