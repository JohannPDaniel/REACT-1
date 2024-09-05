import styled from "styled-components";

// type TDefinicao = "text image" | "image text";
// type TImageText = "image" | "text";

// interface ImageTextProps {
//     md: TDefinicao;
//     sm: TImageText;
// }

type TDirection = "column-reverse" | "column";
interface Direction {
    direction: TDirection;
}

export const ContainerStyles = styled.main<Direction>`
    width: 100%;
    height: 80vh;
    display: flex;

    @media screen and (max-width: 426px) {
        flex-direction: ${({ direction }) => (direction === "column" ? "column" : "column-reverse")};
        height: auto;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        flex-direction: ${({ direction }) => (direction === "column" ? "column" : "column-reverse")};
        height: auto;
    }

    @media screen and (min-width: 1024px) and (max-width: 1439px) {
        height: 100vh;
    }
`;

// export const ContainerStyles = styled.main<ImageTextProps>`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-template-areas: ${({ md }) => (md === "text image" ? `"text image"` : `"image text"`)};

//     @media screen and (max-width: 426px) {
//         grid-template-columns: 1fr;
//         grid-template-areas: ${({ sm }) => (sm === "image" ? `"image" "text"` : `"text" "image"`)};
//     }

//     @media screen and (min-width: 768px) and (max-width: 1023px) {
//         grid-template-columns: 1fr;
//         grid-template-areas: ${({ sm }) => (sm === "image" ? `"image" "text"` : `"text" "image"`)};
//     }

//     @media screen and (min-width: 1024px) and (max-width: 1439px) {
//         grid-template-areas: ${({ md }) => (md === "text image" ? `"text image"` : `"image text"`)};
//     }

//     @media screen and (min-width: 1440px) {
//         grid-template-areas: ${({ md }) => (md === "text image" ? `"text image"` : `"image text"`)};
//     }
// `;
