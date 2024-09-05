import React from "react";
import { ImageContainerStyle } from "./styles/Seção 2/ImageContainerStyle";

interface ImageContainerProps {
    imageSrc: string;
    imageAlt: string;
}

export const ImageContainer: React.FC<ImageContainerProps> = ({ imageSrc, imageAlt }) => {
    return (
        <ImageContainerStyle>
            <img src={imageSrc} alt={imageAlt} />
        </ImageContainerStyle>
    );
};
