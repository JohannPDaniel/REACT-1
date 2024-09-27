import { Link } from "react-router-dom";
import { Button } from "../components/styles/Button";
import { Container } from "../components/styles/Container";
import { Title } from "../components/styles/Title";
import { DefaultLayout } from "../configs/layout/DefaultLayout";

export const SobreNos = () => {
    return (
        <DefaultLayout>
            <Container
                flexDirection="column"
                gap="30px">
                <Title>Sobre Nós</Title>
                <Link to={"/"}>
                    <Button>Voltar para a Home</Button>
                </Link>
            </Container>
        </DefaultLayout>
    );
};
