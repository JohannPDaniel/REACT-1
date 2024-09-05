import styled from 'styled-components';

export const Footer2 = styled.footer`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;

    @media screen and (max-width: 426px) {
        height: 30vh;
        flex-direction: column-reverse;
        justify-content: center;
        gap: 40px;
    }
`;
