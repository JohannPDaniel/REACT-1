// instale o Styled-Components com o comando: npm install styled-components

import styled from "styled-components";

export const GalleryContent = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
	padding: 0 20px;
    margin: 0px 20px;

	img {
		width: 100%;

        &:hover {
            scale: 1.04;
            transition: all 0.4s;
            cursor: pointer;
            border-radius: 10px;
        }
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media screen and (min-width: 768px) and (max-width: 1023px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;