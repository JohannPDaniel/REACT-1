import type { DefaultTheme } from "styled-components";
import { Cores } from "../types/Cores";

export const lightTheme: DefaultTheme = {
    // Page
    backgroundColor: Cores.Branco[10],
    primaryColor: Cores.Azul[5],
    dividerColor: Cores.Cinza[3],

    // Texto
    textColor: Cores.Preto[1],

    // Box-shadow
    boxShadow: Cores.Preto[1],

    // Icone
    icone: "none",

    // border
    border: Cores.Azul[10],

    // Button
    buttonColor: Cores.Azul[5],
};
