/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Container } from "../components/styles/Container";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import { Button } from "../components/styles/Button";

export const UseState = () => {
    document.title = "aula 7, 8, 9, 10 - useState";

    // const [indefinido, setIndefinido] = useState();

    // const [count, setCount] = useState(0);
    // const [nome, setNome] = useState("");
    const [open, setOpen] = useState(true);
    const [pessoa, setPessoa] = useState({
        id: "id",
        nome: "Johann",
        idade: 29,
    });

    const toggleModal = () => {
        setOpen((prevState) => !prevState);
    };

    console.log(open);

    // const [lista, setLista] = useState([]);

    // const [estadoTipado, setEstadoTipado] = useState<number>(0);

    return (
        <DefaultLayout>
            <Container flexDirection="column">
                <h1>{pessoa.nome}</h1>
                <Button
                    onClick={() => {
                        // setOpen(!open);
                        // setOpen( ( prevState ) => !prevState );
                        toggleModal();
                    }}>
                    Abrir
                </Button>
                {open && <h1>Aqui é o meu modal</h1>}
            </Container>
        </DefaultLayout>
    );
};
