import { Button } from './Button';
import { Container } from './Container';
import { GalleryContent } from './GalleryContent';
import { Title } from './Title';

const imgsContent = Array.from({ length: 9 }, (_, index) => ({
	imgSrc: 'https://via.placeholder.com/800',
	imgAlt: `image ${index + 1}`,
}));

export const Gallery = () => {
	return (
		<Container 
			flexDirection='column'
            gap='28px'>
            
			<Title>Minha galeria</Title>

			<GalleryContent>
				{imgsContent.map((item) => (
					<img
						src={item.imgSrc}
						alt={item.imgAlt}
					/>
				))}
			</GalleryContent>

			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

			<Button>Saiba mais</Button>
		</Container>
	);
};
