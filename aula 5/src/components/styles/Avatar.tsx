// instale o Styled-Components com o comando: npm install styled-components

import styled from "styled-components";

type TSize = "sm" | "md" | "lg";

interface AvatarProps {
    size?: TSize;
}
export const Avatar = styled.img<AvatarProps>`
    width: 150px;
    height: auto;
    border-radius: 50%;

    ${(props) => {
        switch (props.size) {
            case "sm":
                return `width: 60px`;
            case "md":
                return `width: 110px`;
            case "lg":
                return `width: 150px`;

            default:
                return `width: 150px`;
        }
    }}
`;
