import { Banner } from '../components/Banner';
import { Avatar } from '../components/styles/Avatar';
import { Button } from '../components/styles/Button';
import { Card } from '../components/styles/Card';
import { Container } from '../components/styles/Container';

export function Home() {
	return (
		<>
			<Banner />
			<Container>
				<Card>
					<Avatar
						src='https://picsum.photos/id/1/500'
						alt='Pessoa 1'
					/>
					<h1>Titulo 1</h1>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
					<Button>Saiba mais</Button>
				</Card>
				<Card>
					<Avatar
						src='https://picsum.photos/id/1/500'
						alt='Pessoa 1'
					/>
					<h1>Titulo 1</h1>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
					<Button>Saiba mais</Button>
				</Card>
				<Card>
					<Avatar
						src='https://picsum.photos/id/1/500'
						alt='Pessoa 1'
					/>
					<h1>Titulo 1</h1>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
					<Button>Saiba mais</Button>
				</Card>
			</Container>
		</>
	);
}
