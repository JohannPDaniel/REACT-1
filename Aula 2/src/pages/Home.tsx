import { Banner } from '../components/Banner';
import { SectionCards } from '../components/SectionCards';
import { Divider } from '../components/styles/Divider';
import { Gallery } from "../components/styles/Gallery";
import { NavBar } from "../components/styles/NavBar";
import { navigations } from "../configs/navigation/Navigations";

export function Home() {
	return (
		<>
			<NavBar navigation={navigations} />
			<Banner />
			<SectionCards />

			<Divider />

			<Gallery />
			
			<Divider />
		</>
	);
}
