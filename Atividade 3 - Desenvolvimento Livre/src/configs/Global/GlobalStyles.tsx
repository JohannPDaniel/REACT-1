// instale o Styled-Components com o comando: npm install styled-components

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-size: "Poppins", sans-serif;
        color
    }
`;
