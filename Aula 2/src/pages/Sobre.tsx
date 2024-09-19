import { Link } from "react-router-dom";
import { Button } from "../components/styles/Button";
import { Container } from "../components/styles/Container";
import { Title } from "../components/styles/Title";

export const SobreNos = () => {
    return (
        <Container flexDirection="column" gap="30px">
            <Title>Sobre Nós</Title>
            <Link to={"/"}>
                <Button>Voltar para a Home</Button>
            </Link>
        </Container>
    );
};
