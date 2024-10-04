import type { DefaultTheme } from "styled-components";
import { Cores } from "../types/Cores";

export const lightTheme: DefaultTheme = {
    // Page
    backgroundColor: Cores.Branco[10],
    dividerColor: Cores.Cinza[3],

    // Texto
    textColor: Cores.Preto[1],

    // Box-shadow
    boxShadow: Cores.Preto[1],

    // Icone
    icone: "none",

    // Button
    buttonColor: Cores.Azul[5],
};
