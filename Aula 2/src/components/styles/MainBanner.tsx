import styled from 'styled-components';
import image4 from '../../assets/image-4.jpg';

export const MainBanner = styled.section`
	width: 100%;
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
    align-items: center;
    gap: 10px;
    background: url(${image4});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: bottom; 
    text-align: center;

    p {
        color: white;
        font-size: 20px;
    }

    @media screen and (max-width: 768px) {
        height: 100vh;
    }
`;
