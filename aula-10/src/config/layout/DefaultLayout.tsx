import { ReactNode } from "react";
import { Footer } from "../../components/Footer";
import { Main } from "../../components/styles/Main";
import { NavBar } from "../../components/NavBar";
import { navigations } from "../navigation/Navigations";

interface DefaultLayout {
    children: ReactNode;
}
export const DefaultLayout = ({ children }: DefaultLayout) => {
    return (
        <>
            <NavBar navigation={navigations} />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};
