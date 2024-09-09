import { Link } from "react-router-dom";
import { Tabela, type propsTabela } from "../components/tabela";
import "./home/Home.css"

export function ListaMercado() {
	const listaMercado: propsTabela[] = [
		{
			itemCol1: 'farinha',
			itemCol2: '2 kg',
		},
		{
			itemCol1: 'açucar',
			itemCol2: '1 kg',
		},
		{
			itemCol1: 'ovos',
			itemCol2: '12 un',
		},
	];

	return (
		<>
			<header className='home-header'>
				<h1>Mercado 🛒</h1>
				<div>
					<Link to='/'>Home</Link>
				</div>
			</header>
			<Tabela
				titleCol1='Item'
				titleCol2='Quantidade'
				tableBody={listaMercado}
			/>
		</>
	);
}
