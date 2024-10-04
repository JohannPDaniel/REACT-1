import { DefaultTheme } from "styled-components";
import { Cores } from "../types/Cores";

export const darkTheme: DefaultTheme = {
    // Page
    backgroundColor: Cores.Preto[5],
    dividerColor: Cores.Branco[10],

    // Texto
    textColor: Cores.Branco[10],

    // Box-shadow
    boxShadow:  Cores.Branco[10],

    // Icone
    icone: "invert()",

    // Button
    buttonColor: Cores.Roxo[4],
};
