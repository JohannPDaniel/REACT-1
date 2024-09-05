import styled from 'styled-components';

export const Button = styled.button`
    color: #fff;
    background-color: #0d6efd;
    border: 1px solid #3681f1;
    border-radius: 8px;
    padding: 18px 30px;
    cursor: pointer;
    font-weight: 600;

    &:hover {
        background-color: #4781d8;
        border: 1px solid #4781d8;
        box-shadow: 0 0 0 2px rgb(40, 230, 200, 0.5)
    }

    &:disabled {
        background-color: #ccc;
        border: 1px solid #ccc;
        box-shadow: none;
        cursor: auto;
    }
`;
