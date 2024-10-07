// instale o Styled-Components com o comando: npm install styled-components

import styled from "styled-components";

interface InputProps {
    isValid: boolean | null;
}

export const Input = styled.input<InputProps>`
    width: 400px;
    padding: 15px 20px;
    font-size: 1rem;
    border-radius: 8px;
    margin: 0 10px;
`;