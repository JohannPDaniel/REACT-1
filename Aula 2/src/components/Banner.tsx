import { Link } from "react-router-dom";
import { Button } from "./styles/Button";
import { MainBanner } from "./styles/MainBanner";
import { Title } from "./styles/Title";

export const Banner = () => {
    return (
        <MainBanner>
            <Title color="white">Meu titulo</Title>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

            <Link to={"/about"}>
                <Button>Saiba mais</Button>
            </Link>
        </MainBanner>
    );
};
