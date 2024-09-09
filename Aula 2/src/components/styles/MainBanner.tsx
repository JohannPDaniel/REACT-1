import styled from 'styled-components';
import image1 from '../../assets/computador.jpg';

export const MainBanner = styled.section`
	width: 100%;
	height: 60vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: center;
    gap: 10px;
    background: url(${image1});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: top center; 
    text-align: center;

    p {
        color: white;
        font-size: 20px;
    }

    @media screen and (max-width: 768px) {
        height: 100vh;
    }
`;
