import { ReactNode } from "react";
import { NavBar } from "../../components/styles/NavBar";
import { navigations } from "../navigation/Navigations";
import { Main } from "../../components/styles/Main";
import { Footer } from "../../components/Footer";

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
