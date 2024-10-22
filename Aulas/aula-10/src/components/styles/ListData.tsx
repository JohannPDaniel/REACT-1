import { useEffect, useState } from "react";

interface Posts {
    userId: number;
    id: number;
    title?: string;
    body: string;
}

interface Comments {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface ListDataProps {
    getData: () => Promise<Posts[] | Comments[]>;
}

export const ListData = ({ getData }: ListDataProps) => {
    const [data, setData] = useState<Posts[] | Comments[]>([]);

    useEffect(() => {
        getData().then((valor) => setData(valor));
    }, [getData]);

    const isComment = (item: Posts | Comments): item is Comments => {
        return (item as Comments).name !== undefined;
    };

    return (
        <>
            {data.length ? (
                data.map((item) => (
                    <div key={item.id}>
                        <p>{item.id}</p>
                        <p>{isComment(item) ? item.name : item.title || "Sem título"}</p>
                        <br />
                    </div>
                ))
            ) : (
                <h1>Nenhum dado encontrado</h1>
            )}
        </>
    );
};
