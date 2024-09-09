import styled from 'styled-components';

type TColor = "black" | "white";

interface TitleProps {
	color?: TColor;
}

export const Title = styled.h1<TitleProps>`
	font-size: 3em;
	text-align: center;
	letter-spacing: 5px;

	color: ${(props) => props.color === 'white' ? "#fff" : "#000"};
`;