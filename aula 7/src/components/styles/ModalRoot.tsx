import styled from "styled-components";

export const ModalRoot = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .container-modal {
        background-color: #fff;
        padding: 16px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .buttons {
        display: flex;
        align-self: center;
        gap: 10px;
        margin-top: 5px
    }
`;
