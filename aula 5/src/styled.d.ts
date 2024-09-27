import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        backgroundColor: string;
        textColor: string;
        primaryColor: string;
        dividerColor: string;
        boxShadow: string;
        icone: string;
        border: string;
        buttonColor: string;
    }
}