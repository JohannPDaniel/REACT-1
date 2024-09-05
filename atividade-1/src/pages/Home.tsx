import { Link } from "react-router-dom";
import ButtonDefault from "../components/ButtonDefaut";

const Home = () => {
	return (
		<>
			<h1>Bem Vindo</h1>
			<Link to='/login'>
				<ButtonDefault texto='Login com <link>' />
			</Link>
		</>
	);
};

export default Home;
