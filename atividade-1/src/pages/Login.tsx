import { Link } from 'react-router-dom';
import ButtonDefault from '../components/ButtonDefaut';

function Login() {
	return (
		<>
			<h1>Login</h1>
			<a href='/home'>
				<ButtonDefault texto='Login com <a></a>' />
			</a>
			<Link to='/home'>
				<ButtonDefault texto='Login com <link>' />
			</Link>
				<ButtonDefault texto='Cadastre-se' />
		</>
	);
}

export default Login;
