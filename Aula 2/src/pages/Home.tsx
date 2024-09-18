import { Banner } from '../components/Banner';
import { SectionCards } from '../components/SectionCards';
import { Divider } from '../components/styles/Divider';
import { Gallery } from "../components/styles/Gallery";

export function Home() {
	return (
		<>
			<Banner />
			<SectionCards />

			<Divider />

			<Gallery />
			
			<Divider />
		</>
	);
}
