# React 1

### Preset inicial para começar um projeto React-ts

<li>Criar a pasta para iniciar o projeto React</li>

```bash
npm create vite@latest my-react-app -- --template react-ts
```
### node_modules <br>

(👉 [Instalar o node_modules](#modules1) 👈)
```bash
npm install
```

<a href="#routes1">
    <li id="routes" border="none">
        Instalar o React Router Dom
    </li>
</a>

```bash
npm install react-router-dom
```

<a href="#styled1">
    <li id="styled">Instalar o Styled-Components</li>
</a>

```bash
npm install styled-components
```

---

<a href="#app">
    <p id="app1">
        AppRoutes.tsx
    </p>
</a>

```tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
   {
       path: '/',
       element: <div></div>,
   },
]);

export function AppRoutes() {
    return <RouterProvider router={router} />;
}
```
<a href="#global">
    <p id="global1" align="center">
        GlobalStyles.tsx
    </p>
</a>

```tsx
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
   }

   body {
    background-color: #fff;
    font-family: "Poppins", sans-serif;
   }
`;
```

<li>Estrutura de pastas do projeto</li>

<p style="font-size: 20px;">
    📁 my-react-app<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📁 <a href="#modules" id="modules1">node_modules</a> <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📁 public <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📂 src <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_📂 assets - OBS:. (Tirar do public e colocar no assets) <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂 components - OBS:. (Não vem com o projeto default) <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂 styles - OBS:. (Não vem com o projeto default)</<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂 configs - OBS:. (Não vem com o projeto default) <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂<a href="#styled" id="styled1"> global - OBS:. (Não vem com o projeto default)</a><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📄 <a href="#global1" id="global">GlobalStyle.tsx</a> <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂<a href="#routes" id="routes1"> routes -OBS:. (Não vem com o projeto default)</a>   <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📄 <a href="#app1" id="app">AppRoutes.tsx</a>  <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂 pages - OBS:.(Não vem com o projeto default)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📄 App.tsx <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📄 main.tsx <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📄 vite-env.d.ts <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📄 .gitignore <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📄 eslint.config.js <br>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📄 index.html <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📄 package-lock.json <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📄 package.json <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📄 README.md <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📄 tsconfig.json <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📄 vite.config.ts <br>
</p>
