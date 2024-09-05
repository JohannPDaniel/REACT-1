import styled from "styled-components";

export const Main1 = styled.main`
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    align-items: baseline;
    justify-content: space-evenly;

    @media screen and (max-width: 426px) {
        min-height: 100vh;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 80px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        height: 50vh;
        justify-content: space-around;
        min-height: 50vh;
    }

    @media screen and (min-width: 1024px) and (max-width: 1439px) {
        justify-content: space-around;
        min-height: 50vh;
        height: 50vh;
    }

    @media screen and (min-width: 1440px) {
        justify-content: space-around;
        min-height: 50vh;
        height: 50vh;
    }
`;
