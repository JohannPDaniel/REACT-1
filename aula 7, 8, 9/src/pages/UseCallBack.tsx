import { useCallback, useState } from "react";
import { Button } from "../components/styles/Button";
import { Container } from "../components/styles/Container";
import { Input } from "../components/styles/Input";
import { Title } from "../components/styles/Title";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import { ListData } from './../components/styles/ListData';

export const UseCallBack = () => {
    document.title = "UseCallBack";
    const [input, setInput] = useState("");
    const [type, setType] = useState("posts");

    const getData = useCallback(async () => {
        try {
            console.log('Montou o componente');
            
            const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
            const json = await response.json(); 
            return json;
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }, [type]); 

    return (
        <DefaultLayout>
            <Container flexDirection="column">
                <Title>useCallBack - Exemplo</Title>
                <Input
                    placeholder="Buscando ..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <div>
                    <Button onClick={() => setType("posts")}>Posts</Button>
                    <Button onClick={() => setType("comments")}>Comments</Button>
                </div>

                <ListData getData={getData} />
            </Container>
        </DefaultLayout>
    );
};
