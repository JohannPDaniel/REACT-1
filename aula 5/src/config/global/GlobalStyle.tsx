import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.textColor};
    }

    a {
        text-decoration: none;
    }
`;
