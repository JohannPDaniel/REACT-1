import type { ReactNode } from "react";
import { Header } from "./styles/Seção 1/Header";
import { Footer } from "./styles/Seção 3/Footer";

type HeaderOrFooter = "Header" | "Footer";

interface HeaderFooterProps {
    children: ReactNode;
    title: HeaderOrFooter;
}
export const HeaderFooter: React.FC<HeaderFooterProps> = ({ children, title }) => {
    const Component = title === "Header" ? Header : Footer;
    return <Component>{children}</Component>;
};