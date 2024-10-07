import { useEffect, useState } from "react";
import { Button } from "../components/styles/Button";
import { Container } from "../components/styles/Container";
import { Title } from "../components/styles/Title";
import { DefaultLayout } from "../config/layout/DefaultLayout";

export const UseEffect = () => {
    const [open, setOpen] = useState<boolean>(false);
    useEffect(() => {
        console.log("Executou... S/ Array", open);
    }, [open]);

    useEffect(() => {
        /* 
            -- Montagem do componente --
            Primeira renderização --> quando você entra na pagina.
        */
        document.title = "aula 7 - useEffect";
        console.log("Montou o componente");

        return () => {
            /* 
                -- Desmontagem do componente --
                quando você sai da pagina.
            */
            document.title = "Titulo original";
            console.log("Desmontou o componente");
        };
    }, []);
    return (
        <DefaultLayout>
            <Container flexDirection="column">
                <Title>useEffect - Exemplo</Title>
                <Button onClick={() => setOpen(!open)}>Abrir</Button>
            </Container>
        </DefaultLayout>
    );
};
