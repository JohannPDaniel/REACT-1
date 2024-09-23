import { Button } from "./Button";
import logo from "../../assets/logos/dev.webp";
import { Avatar } from "./Avatar";
import { Header } from "./Header";
import { Link } from "react-router-dom";
import { Navigation } from "../../configs/navigation/Types";

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
