import styled from "styled-components";

export const FooterRoot = styled.footer`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 250px;

    nav {
        display: flex;
        gap: 10px;

        img {
            width: 30px;
            cursor: pointer;
            filter: ${({ theme }) => theme.icone_1};

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
