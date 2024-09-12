import { Footer2 } from "../components/styles/Seção 3/Footer2";
import { TextFooter } from "../components/styles/Seção 3/TextFooter";
import { ImageFooter } from "../components/styles/Seção 3/ImageFooter";
import { HeaderFooter } from "../components/HeaderFooter";
import { ContainerCards } from "../components/ContainerCards";
import { ContainerStyles } from "../components/styles/Seção 2/ContainerStyles";
import { TextContainer } from "../components/TextContainer";
import { ImageContainer } from "../components/ImageContainer";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";

export const Home = () => {
    return (
        <>
            <HeaderFooter title="Header">
                <h1>Minha primeira pagina com React.</h1>
            </HeaderFooter>
                      
            <ContainerCards />

            <ContainerStyles direction="column">
                <TextContainer />
                <ImageContainer imageSrc={image4} imageAlt="imagem 4" />
            </ContainerStyles>

            <ContainerStyles direction="column-reverse">
                <ImageContainer imageSrc={image5} imageAlt="imagem 5" />
                <TextContainer />
            </ContainerStyles>

            <ContainerStyles direction="column">
                <TextContainer />
                <ImageContainer imageSrc={image6} imageAlt="imagem 6" />
            </ContainerStyles>

            <HeaderFooter title="Footer">
                <h1>Contato</h1>
            </HeaderFooter>

            <Footer2>
                <TextFooter>
                    <p>About &#183; Contact &#183; Terms of Use &#183; Privacy Policy</p>
                    <span>&#169; Your website 2020. All Rights Reserved</span>
                </TextFooter>
                <ImageFooter>
                    <img src={image7} alt="imagem7" />
                    <img src={image8} alt="imagem8" />
                    <img src={image9} alt="imagem9" />
                </ImageFooter>
            </Footer2>
        </>
    );
};
