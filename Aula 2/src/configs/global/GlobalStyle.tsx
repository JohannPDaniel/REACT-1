import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
  }

  a {
    text-decoration: none;
  }
`;
