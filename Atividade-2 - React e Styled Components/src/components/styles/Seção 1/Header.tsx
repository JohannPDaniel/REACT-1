import styled from 'styled-components';
import image from '../../../assets/image.png';

export const Header = styled.header`
	width: 100%;
	height: 50vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-image: url(${image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: bottom center;

	h1 {
		color: white;
		font-family: 'Roboto', sans-serif;
		font-weight: 500;
		letter-spacing: 2px;
		font-size: 40px;
	}

	@media (max-width: 426px) {
		height: 30vh;

		h1 {
			font-size: 20px;
			text-align: center;
			padding: 5px
		}
	}
`;
