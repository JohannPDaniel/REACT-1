import { Link } from 'react-router-dom';
import './Home.css';
export function Home() {
	return (
		<div className='home-container'>
			<header className='home-header'>
				<h1>Mercado 🛒</h1>
				<div>
					<Link to='/lista-mercado'>Lista de Mercado</Link>
					<Link to='/sobre'>Sobre</Link>
				</div>
			</header>
			<div className='home-hero'>
				<h1>Pagina Inicial do Mercado</h1>

				<p>
					Bem-vindo ao mercado, aqui você encontra tudo que precisa para sua
					casa.
				</p>

				<p>
					Para começar, clique em <strong>Lista de Mercado</strong> no menu
					acima.
				</p>
			</div>
		</div>
	);
}
