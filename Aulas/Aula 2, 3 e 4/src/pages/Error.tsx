import { Link } from "react-router-dom";
import { Button } from "../components/styles/Button";
import { Container } from "../components/styles/Container";
import { Title } from "../components/styles/Title";

export const Error = () => {
    return (
        <Container
            flexDirection="column"
            gap="30px">
            <Title>Ops! Pagina não encontrada 😫</Title>

            <Link to="/">
                <Button>Voltar para a Home</Button>
            </Link>
        </Container>
    );
};
