import styled from 'styled-components';

interface ModalRootProps {
	width?: string;
	height?: string;
}

export const ModalRoot = styled.div<ModalRootProps>`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	> div {
		width: 100%;
		max-width: ${({ width }) => width || '450px'};
		height: ${({ height }) => height || '400px'};
		background-color: var(--branco-1);
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 15px;

		h2 {
			color: var(--preto-1);
			font-size: 2rem;
		}
	}
`;
