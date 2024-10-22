import { useMemo, useState } from "react";
import { Container } from "../components/styles/Container";
import { Input } from "../components/styles/Input";
import { Title } from "../components/styles/Title";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import { Button } from './../components/styles/Button';

function calculate(valor: number) {
    console.log("Montou a minha função");

    for (let i = 0; i < 1_000_000_000; i++) {
        //....
    }

    return valor * 2;
}

export const UseMemo = () => {
    const [input, setInput] = useState("");
    const [valor, setValor] = useState(0);

    // const valorDobrado = calculate( valor );
    const valorDobradoComUseMemo = useMemo(() => {
        calculate(valor);
    }, [valor]);

    document.title = "aula 7, 8, 9, 10 - useMemo";
    return (
        <DefaultLayout>
            <Container flexDirection="column">
                <Title>useMemo - Exemplo</Title>
                <Input
                    placeholder="Buscando ..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <h2>Nome: {input}</h2>
                <Button onClick={() => setValor((prev) => prev + 1)}>Incrementar</Button>
            </Container>
        </DefaultLayout>
    );
};
