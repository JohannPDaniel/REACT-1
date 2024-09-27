import { FooterRoot } from "./styles/FooterRoot";
import { Link } from "react-router-dom";
import facebook from "../assets/sociais/facebook.svg";
import instagram from "../assets/sociais/instagram.svg";
import linkedin from "../assets/sociais/linkedin.svg";

const links = [
    { img: facebook, alt: "facebook svg", url: "https://www.facebook.com/MSNBrasil/" },
    { img: instagram, alt: "instagram svg", url: "https://www.instagram.com/" },
    { img: linkedin, alt: "linkedin svg", url: "https://www.linkedin.com/feed/" },
];

export const Footer = () => {
    return (
        <FooterRoot>
            <small>&copy; 2024 - 19ª edição</small>
            <nav>
                {links.map((link) => {
                    return (
                        <Link
                            to={link.url}
                            target="_blank">
                            <img
                                src={link.img}
                                alt={link.alt}
                            />
                        </Link>
                    );
                })}
            </nav>
        </FooterRoot>
    );
};
