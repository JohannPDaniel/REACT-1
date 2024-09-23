// instale o Styled-Components com o comando: npm install styled-components

import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: ${({ theme }) => theme.backgroundColor};
    -webkit-box-shadow: -2px 20px 23px -9px rgba(0, 0, 0, 0.39);
    -moz-box-shadow: -2px 20px 23px -9px rgba(0, 0, 0, 0.39);
    box-shadow: -2px 20px 23px -9px rgba(0, 0, 0, 0.39);

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;

        a {
            display: inline-block;
            color: ${({ theme }) => theme.textColor};
            font-size: 18px;

            &:hover {
                color: ${({ theme }) => theme.primaryColor};
            }
        }
    }

    @media screen and (max-width: 480px) {
        padding: 0 14px;

        nav > a {
            display: none;
        }
    }
`;
