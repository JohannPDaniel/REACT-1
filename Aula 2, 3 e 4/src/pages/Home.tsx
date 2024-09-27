import { Banner } from "../components/Banner";
import { SectionCards } from "../components/SectionCards";
import { Divider } from "../components/styles/Divider";
import { Gallery } from "../components/styles/Gallery";
import { DefaultLayout } from "../configs/layout/DefaultLayout";

export function Home () {
	return (
        <DefaultLayout>
            <Banner />
            <SectionCards />

            <Divider />

            <Gallery />

            <Divider />

        </DefaultLayout>
    );
}
