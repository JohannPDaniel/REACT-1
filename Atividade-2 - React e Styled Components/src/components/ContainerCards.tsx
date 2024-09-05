import { Main1 } from "./styles/Seção 1/Main1";
import { SectionCard } from "./styles/Seção 1/SectionCard";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

export const ContainerCards = () => {
    return (
        <Main1>
            <SectionCard>
                <img src={image1} alt="imagem1" />
                <h3>Somente para desktop</h3>
                <p>Vamos aprender como utilizar um framework.</p>
            </SectionCard>

            <SectionCard>
                <img src={image2} alt="imagem2" />
                <h3>Criado com componentes</h3>
                <p>Utilizamos o Styled Components</p>
            </SectionCard>

            <SectionCard>
                <img src={image3} alt="imagem3" />
                <h3>Fácil aproveitamento</h3>
                <p>Estamos no caminho.</p>
            </SectionCard>
        </Main1>
    );
};
