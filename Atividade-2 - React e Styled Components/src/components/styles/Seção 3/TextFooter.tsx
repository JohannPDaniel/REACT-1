import styled from "styled-components";

export const TextFooter = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    p {
        color: #057af6;
        font-size: 1rem;
    }

    span {
        font-size: 13px;
        color: #494545;
    }

    @media screen and (max-width: 426px) {
        align-items: center;
        gap: 15px;

        p {
            text-align: center;
        }

        span {
            text-align: center;
        }
    }
`;
