import styled from "styled-components";

export const ImageContainerStyle = styled.article`
    width: 50%;
    flex-grow: 1; 
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (max-width: 426px) {
        width: 100%;
        height: 70vh;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
        height: 80vh;
    }
`;

// export const ImageContainerStyle = styled.div`
//     grid-area: image;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     height: 100%;

//     img {
//         width: 100%;
//         height: 100%;
//         object-fit: cover;
//     }

//     @media screen and (max-width: 426px) {
//         width: 100%;
//     }

//     @media screen and (min-width: 768px) and (max-width: 1023px) {
//         margin-bottom: 20px;
//     }

//     @media screen and (min-width: 1024px) and (max-width: 1439px) {
//         width: 100%;
//     }

//     @media screen and (min-width: 1440px) {
//         width: 100%;
//     }
// `;
