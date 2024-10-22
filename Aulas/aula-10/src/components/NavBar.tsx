import { useContext } from "react";
import { Avatar } from "./styles/Avatar";
import { Button } from "./styles/Button";
import { Header } from "./styles/Header";
import { Link } from "react-router-dom";
import { Navigation } from "../config/navigation/Types";
import logo from "../assets/logos/dev.webp";
import themeIcon from '../assets/circle-half-stroke.png';
import { ThemeContext } from "../config/context/ThemeContext";

interface NavBarProps {
    navigation: Navigation[];
}

export const NavBar = ({ navigation }: NavBarProps) => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
			<Header>
				<Avatar
					src={logo}
					alt='logo'
					size='sm'
				/>
				<nav>
					{navigation.map((nav) => {
						return <Link to={nav.to}>{nav.title}</Link>;
					})}
					<Button
						size='small'
						onClick={toggleTheme}>
						<img
							src={themeIcon}
							alt='theme_dark_light'
						/>
					</Button>
				</nav>
			</Header>
		);
};
