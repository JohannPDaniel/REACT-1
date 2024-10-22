import { useEffect, useState } from "react";
import { Container } from "../components/styles/Container";
import { Input } from "../components/styles/Input";
import { Title } from "../components/styles/Title";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import { Table } from "../components/styles/Table";

interface Dados {
    userId: number;
    id: string;
    title: string;
    completed: boolean;
}

export const UseEffect = () => {
    // const [open, setOpen] = useState<boolean>(false);
    const [id, setid] = useState<string>("");
    const [dados, setDados] = useState<Dados[]>([]);
    // useEffect(() => {
    //     /*
    //         -- Montagem do componente --
    //         Primeira renderização --> quando você entra na pagina.
    //     */
    //     document.title = "aula 7 - useEffect";
    //     console.log("Componente foi renderizado");

    //     return () => {
    //         /*
    //             -- Desmontagem do componente --
    //             quando você sai da pagina.
    //         */
    //         console.log("Desmontou o componente");
    //     };
    // }, []);

    useEffect(() => {
        const getTodos = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const json = await response.json();
                console.log("Dados recebidos da API:", json);
                setDados(json);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        getTodos();
    }, []);
    const dadosFiltrados = id ? dados.filter((dado) => dado.id.toString() === id) : dados;

    return (
        <DefaultLayout>
            <Container flexDirection="column">
                <Title>useEffect - Exemplo</Title>
                <Input
                    type="text"
                    placeholder="Buscar ..."
                    value={id}
                    onChange={(e) => setid(e.target.value)}
                />
                <>
                    {dados.length > 0 ? (
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>UserID</th>
                                    <th>Title</th>
                                    <th>Completed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dadosFiltrados.map((dado) => (
                                    <tr key={dado.id}>
                                        <td>{dado.id}</td>
                                        <td>{dado.userId}</td>
                                        <td>{dado.title}</td>
                                        <td>{dado.completed ? "Sim" : "Não"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    ) : (
                        <p>Carregando dados...</p>
                    )}
                </>
            </Container>
        </DefaultLayout>
    );
};
