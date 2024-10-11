// instale o Styled-Components com o comando: npm install styled-components

import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    max-width: 700px;
    border-collapse: collapse;

    tr {
        height: 30px;
    }

    td {
        border: 1px solid black;
        padding: 10px;
    }

    td:nth-child(3) {
        border: 1px solid black;
        padding: 10px;
        width: 400px;
    }
`;