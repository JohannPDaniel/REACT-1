import { DefaultTheme } from "styled-components";
import { Cores } from "../types/Cores";

export const darkTheme: DefaultTheme = {
    // Page
    backgroundColor: Cores.Preto[5],
    primaryColor: Cores.Roxo[4],
    dividerColor: Cores.Branco[10],

    // Texto
    textColor: Cores.Branco[10],

    // Box-shadow
    boxShadow:  Cores.Branco[10],

    // Icone
    icone: "invert()",

    // border
    border: Cores.Roxo[7],

    // Button
    buttonColor: Cores.Roxo[4],

    // hover
    hoverColor: Cores.Laranja[5]
};
