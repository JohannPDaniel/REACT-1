import styled from "styled-components";

export const TextContainerStyle = styled.article`
    width: 50%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 80px;

    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1.3rem;
        margin-right: 8px;
        line-height: 1.5;
        color: #333;
    }

    @media screen and (max-width: 426px) {
        width: 100%;
        height: 130vh;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
        height: 70vh;
        padding: 60px 80px;
    }

    @media screen and (min-width: 1024px) and (max-width: 1439px) {
        height: auto;
        padding: 60px 70px;
    }
`;

// export const TextContainerStyle = styled.article`
//     grid-area: text;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     gap: 15px;
//     padding: 120px 80px;

//     h1 {
//         font-size: 2rem;
//     }

//     p {
//         font-size: 1.3rem;
//         margin-right: 8px;
//         line-height: 1.5;
//         color: #333;
//     }

//     @media screen and (max-width: 426px) {
//         padding: 80px 60px;

//         p {
//             font-size: 1.1rem;
//             margin-right: 28px;
//         }
//     }

//     @media screen and (min-width: 768px) and (max-width: 1023px) {
//         padding: 120px 80px;

//         p {
//             margin-right: 8px;
//         }
//     }

//     @media screen and (min-width: 1024px) and (max-width: 1439px) {
//         padding: 60px 70px;

//         p {
//             margin-right: 5px;
//         }
//     }
// `;
