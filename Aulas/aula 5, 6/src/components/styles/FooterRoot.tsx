import styled from "styled-components";

export const FooterRoot = styled.footer`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 250px;
    box-shadow: 12px 4px 15px ${({ theme }) => theme.boxShadow};

    nav {
        display: flex;
        gap: 16px;

        img {
            width: 30px;
            cursor: pointer;
            filter: ${({ theme }) => theme.icone};

            &:hover {
                scale: 1.1;
                transition: all 0.2s;
            }
        }
    }

    @media screen and (max-width: 480px) {
        height: 80px;
        padding-inline: 50px;
    }

    @media screen and (min-width: 480px) and (max-width: 992px) {
        height: 80px;
        padding-inline: 50px;
    }
`;
