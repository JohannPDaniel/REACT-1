import { Avatar } from "./styles/Avatar";
import { Button } from "./styles/Button";
import { Card } from "./styles/Card";
import { Container } from "./styles/Container";

type CardContent = {
	imgSrc: string;
	imgAlt: string;
	title: string;
	description: string;
};

const cardsContent: CardContent[] = [
	{
		imgSrc: 'https://picsum.photos/500',
		imgAlt: 'Imagem 1',
		title: 'Titulo 1',
		description: 'Lorem ipsum dolor sit amet consectetur.',
	},
	{
		imgSrc: 'https://picsum.photos/500',
		imgAlt: 'Imagem 2',
		title: 'Titulo 2',
		description: 'Lorem ipsum dolor sit amet consectetur.',
	},
	{
		imgSrc: 'https://picsum.photos/500',
		imgAlt: 'Imagem 3',
		title: 'Titulo 3',
		description: 'Sit amet consectetur adipisicing elit.',
	},
];

export const SectionCards = () => {
	return (
		<Container gap="30px">
			{cardsContent.map((card) => (
				<Card>
					<Avatar
						src={card.imgSrc}
						alt={card.imgAlt}
					/>
					<h1>{card.title}</h1>
					<p>{card.description}</p>
					<Button>Saiba mais</Button>
				</Card>
			))}
		</Container>
	);
};
