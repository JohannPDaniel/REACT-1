import styled from "styled-components";

type TSize = "small" | "medium" | "large";
type TVariant = "default" | "error";

interface ButtonProps {
    size?: TSize;
    variant?: TVariant;
}

export const Button = styled.button<ButtonProps>`
    color: #fff;
    background-color: ${({ variant, theme }) => variant === 'error' ? 'red' : theme.buttonColor};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;

    &:hover {
        background-color: ${({ theme }) => theme.hoverColor};
        border: 1px solid ${({ theme }) => theme.primaryColor};
        opacity: 80%;
        box-shadow: 0 0 0 2px rgb(40, 230, 200, 0.5);
    }

    &:disabled {
        background-color: #ccc;
        border: 1px solid #ccc;
        box-shadow: none;
        cursor: auto;
    }

    ${(props) => {
        switch (props.size) {
            case "small":
                return `
					padding: 8px 14px;
				`;
            case "medium":
                return `
				    padding: 13px 26px;
				`;
            case "large":
                return `
				    padding: 18px 28px;
				`;

            default:
                return `
				    padding: 18px 28px;
				`;
        }
    }}
`;
