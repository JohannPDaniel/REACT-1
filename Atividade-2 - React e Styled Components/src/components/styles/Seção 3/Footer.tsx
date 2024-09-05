import styled from 'styled-components';
import image from '../../../assets/image.png';

export const Footer = styled.footer`
	width: 100%;
	height: 30vh;
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
		font-family: "Roboto", sans-serif;
        font-weight: 500;
        letter-spacing: 2px;
        font-size: 40px;
	}
`;
