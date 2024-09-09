interface ButtonProps {
  texto: string;
}

function ButtonDefault(props: ButtonProps) {
	return <button>{props.texto}</button>;
}

export default ButtonDefault;
