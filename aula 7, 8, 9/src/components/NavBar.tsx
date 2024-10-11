import { useContext } from "react";
import { Avatar } from "./styles/Avatar";
import { Button } from "./styles/Button";
import { Header } from "./styles/Header";
import { Link } from "react-router-dom";
import { Navigation } from "../config/navigation/Types";
import logo from "../assets/logos/dev.webp";
import { ThemeContext } from "../config/context/ThemeContext";

interface NavBarProps {
    navigation: Navigation[];
}

export const NavBar = ({ navigation }: NavBarProps) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <Header>
            <Avatar
                src={logo}
                alt="logo"
                size="sm"
            />
            <nav>
                {navigation.map((nav) => {
                    return <Link to={nav.to}>{nav.title}</Link>;
                })}
                <Button size="medium" onClick={toggleTheme}>{theme === 'lightTheme' ? 'darkMode' : 'lightMode'}</Button>
            </nav>
        </Header>
    );
};
