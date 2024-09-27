import { Avatar } from "./styles/Avatar";
import { Button } from "./styles/Button";
import { Header } from "./styles/Header";
import { Link } from "react-router-dom";
import { Navigation } from "../configs/navigation/Types";
import logo from "../../assets/logos/dev.webp";

interface NavBarProps {
    navigation: Navigation[];
}

export const NavBar = ({ navigation }: NavBarProps) => {
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
                <Button size="small">Login</Button>
            </nav>
        </Header>
    );
};
