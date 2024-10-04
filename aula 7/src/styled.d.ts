import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        backgroundColor: string;
        textColor: string;
        dividerColor: string;
        boxShadow: string;
        icone: string;
        buttonColor: string;
    }
}