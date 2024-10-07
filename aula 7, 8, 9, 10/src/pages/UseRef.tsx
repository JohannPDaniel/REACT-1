import { useEffect, useRef, useState } from "react";
import { Button } from "../components/styles/Button";
import { Container } from "../components/styles/Container";
import { Input } from "../components/styles/Input";
import { Title } from "../components/styles/Title";
import { DefaultLayout } from "../config/layout/DefaultLayout";

export const UseRef = () => {
    const refInput = useRef<HTMLInputElement | null>(null);
    const [nome, setNome] = useState<string>("");

    function enviarDados() {
        if (nome.length < 3) {
            return;
        }
        console.log("Enviando os dados", { nome });
    }

    useEffect(() => {
        document.title = "Aula 7 - useRef";

        if (refInput.current && nome.length === 0) {
            refInput.current.style.outline = "black";
            refInput.current.style.border = "2px solid black";
            refInput.current.style.boxShadow = "none";
            return;
        }

        if (refInput.current && nome.length < 3) {
            refInput.current.focus();
            refInput.current.style.outline = "1px solid red";
            refInput.current.style.border = "1px solid red";
            refInput.current.style.boxShadow = "0 3px 5px #f34179c9";
            return;
        }

        if (refInput.current) {
            refInput.current.style.outline = "1px solid green";
            refInput.current.style.border = "1px solid green";
            refInput.current.style.boxShadow = "0 3px 5px #5ced34";
            return;
        }
    }, [nome]);

    return (
        <DefaultLayout>
            <Container flexDirection="column">
                <Title>useRef - Exemplo</Title>
                <Input
                    isValid
                    ref={refInput}
                    value={nome}
                    onChange={(e) => setNome(e.currentTarget.value)}
                />
                <Button onClick={enviarDados}>Enviar</Button>
            </Container>
        </DefaultLayout>
    );
};
