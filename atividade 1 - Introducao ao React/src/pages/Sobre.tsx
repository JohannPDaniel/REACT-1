import { Link } from "react-router-dom";
import "./home/Home.css"

export function Sobre() {
	return (
		<>
			<header className='home-header'>
				<h1>Mercado 🛒</h1>
				<div>
					<Link to='/'>Home</Link>
				</div>
			</header>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					fontSize: '20px',
				}}>
				<h1>Sobre</h1>
			</div>
		</>
	);
}
