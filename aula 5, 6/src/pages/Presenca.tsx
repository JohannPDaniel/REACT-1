import { useState } from "react";
import { v4 as generateId } from "uuid";
import { Button } from "../components/styles/Button";
import { Container } from "../components/styles/Container";
import { Input } from "../components/styles/Input";
import { Title } from "../components/styles/Title";
import { DefaultLayout } from "../config/layout/DefaultLayout";
import { ModalExclude } from "../components/ModalExclude";
import { ModalUpdate } from "../components/ModalUpdate";

interface Presenca {
    id: string;
    nome: string;
    criadoEm: Date;
}

export const Presenca = () => {
    const [listaPresenca, setListaPresenca] = useState<Presenca[]>([]);
    const [idSelected, setIdSelected] = useState<string>("");
    const [nameSelected, setNameSelected] = useState<string>("");
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [isOpenModalUpdated, setIsOpenModalUpdated] = useState<boolean>(false);

    function submitForm(evento: React.FormEvent<HTMLFormElement>): void {
        evento.preventDefault();

        const newPresenca: Presenca = {
            id: generateId(),
            nome: evento.currentTarget.nome.value,
            criadoEm: new Date(),
        };

        if (!newPresenca.nome.length) {
            alert("Nome inválido");
            return;
        }

        setListaPresenca([...listaPresenca, newPresenca]);

        evento.currentTarget.reset();
    }

    function updatedPresenca(evento: React.FormEvent<HTMLFormElement>): void {
        evento.preventDefault();
        
        if (!nameSelected.length) {
            alert("Nome inválido");
            return;
        }

        setListaPresenca((prevState) => prevState.map((presenca) => (presenca.id === idSelected ? { ...presenca, nome: nameSelected } : presenca)));

        closeModalUpdated();
    }

    function openModalUpdated(id: string): void {
        setIsOpenModalUpdated(true);
        setIdSelected(id);

        const nomePresenca = listaPresenca.find((p) => p.id === id);
        if (!nomePresenca) {
            alert("Presença não encontrada !!!");
            return;
        }

        setNameSelected(nomePresenca.nome);
    }

    function openModalExclude(id: string) {
        setIsOpenModal(true);
        setIdSelected(id);
    }

    function closeModalUpdated() {
        setIsOpenModalUpdated(false);
        setIdSelected("");
    }

    function closeModalExclude() {
        setIsOpenModal(false);
        setIdSelected("");
    }

    function confirmExclude() {
        // setListaPresenca((prevState) => prevState.filter((p) => p.id !== idSelected));

        const index = listaPresenca.findIndex((p) => p.id === idSelected);

        if (index === -1) {
            alert("Id não encontrado");
            closeModalExclude();
            return;
        }

        setListaPresenca((prevState) => {
            const temp = [...prevState];
            temp.splice(index, 1);
            return temp;
        });

        setIdSelected("");
        closeModalExclude();
    }

    return (
        <DefaultLayout>
            <Container flexDirection="column">
                <Title>Lista de Presença</Title>
                <form onSubmit={submitForm}>
                    <Input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Nome do aluno"
                    />
                    <Button type="submit">Adicionar</Button>
                </form>

                <table style={{ width: "500px" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Criado em</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaPresenca.map((presenca, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{presenca.nome}</td>
                                    <td>{presenca.criadoEm.toLocaleDateString()}</td>
                                    <td>
                                        <Button
                                            size="small"
                                            onClick={() => openModalUpdated(presenca.id)}>
                                            Atualizar
                                        </Button>
                                        <Button
                                            variant="error"
                                            onClick={() => openModalExclude(presenca.id)}
                                            size="small">
                                            Excluir
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Container>

            <ModalExclude
                onConfirm={confirmExclude}
                onClose={closeModalExclude}
                isOpen={isOpenModal}
            />

            <ModalUpdate
                isOpen={isOpenModalUpdated}
                onClose={closeModalUpdated}
                title="Atualizar aluno da lista de presença">
                <form onSubmit={updatedPresenca}>
                    <Input
                        type="text"
                        name="nome"
                        value={nameSelected}
                        onChange={(e) => setNameSelected(e.target.value)}
                    />
                    <Button type="submit">Atualizar</Button>
                </form>
            </ModalUpdate>
        </DefaultLayout>
    );
};
