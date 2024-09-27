// instale o Styled-Components com o comando: npm install styled-components

import styled from "styled-components";

export const FooterRoot = styled.footer`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;

    nav {
        display: flex;
        gap: 16px;

        img {
            width: 30px;
            cursor: pointer;
            filter: ${({ theme }) => (theme.textColor === "#fff" ? "invert()" : "none")};

            &:hover {
                scale: 1.1;
                transition: all 0.2s;
            }
        }
    }
`;
