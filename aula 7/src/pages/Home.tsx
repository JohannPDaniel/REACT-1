import { useState } from "react";
import { Button } from "../components/styles/Button";
import { Container } from "../components/styles/Container";
import { DefaultLayout } from "../config/layout/DefaultLayout";

// export const Home = () => {
//     let contador: number = 0;

//     function incrementar() {
//         contador++;
//         console.log("Incrementando ...", contador);
//         document.getElementById("contador")!.innerText = `Contador: ${contador}`;
//     }
//     function decrementar() {
//         contador--;
//         console.log("Decrementando ...", contador);
//         document.getElementById("contador")!.innerText = `Contador: ${contador}`;
//     }

//     return (
//         <DefaultLayout>
//             <Container>
//                 <Button onClick={() => decrementar()}>-</Button>
//                 <h1 id="contador">Contador: {contador}</h1>
//                 <Button onClick={incrementar}>+</Button>
//             </Container>
//         </DefaultLayout>
//     );
// };

export const Home = () => {
    const [contador, setContador] = useState<number>(0);
    function incrementar() {
        setContador((prevState) => {
            return prevState + 1;
        });
        console.log("Incrementando ...");
    }
    function decrementar() {
        setContador((prevState) => {
            if (prevState === 0) {
                return 0;
            }
            return prevState - 1;
        });
        console.log("Decrementando ...");
    }

    return (
        <DefaultLayout>
            <Container>
                <Button onClick={() => decrementar()}>-</Button>
                <h1 id="contador">Contador: {contador}</h1>
                <Button onClick={incrementar}>+</Button>
            </Container>
        </DefaultLayout>
    );
};
