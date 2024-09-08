# React 1

<h3 style="text-align: center; text-decoration: underline; font-size: 20px; text-underline-offset: 6px;">
    Preset inicial para começar um projeto React-ts
</h3>

<li style="font-size:16px; margin-bottom: 10px">Criar a pasta para iniciar o projeto React</li>

```bash
npm create vite@latest my-react-app -- --template react-ts
```

<a href="#modules1">
    <li id="modules" style="font-size:16px; margin-bottom: 10px; color: #79f179">Instalar a node_modules</li>
</a>

```bash
npm install
```

<a href="#routes1">
    <li id="routes" style="font-size:16px; margin-bottom: 10px; color: #1dc6ec">
        Instalar o React Router Dom
    </li>
</a>

```bash
npm install react-router-dom
```

<a href="#styled1">
    <li id="styled" style="font-size:16px; margin-bottom: 10px; color: yellow">Instalar o Styled-Components</li>
</a>

```bash
npm install styled-components
```

<hr style="border: 1px solid #1dc6ec; width: 100%;">

<a href="#app">
    <p id="app1" style="font-size:20px;text-align:center;color:lightgreen; margin-bottom: 10px;">
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

<li style="font-size:16px; margin-bottom: 10px;">Estrutura de pastas do projeto</li>

<p style="font-size: 20px;">
    📁 my-react-app<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📁 <a href="#modules" id="modules1" style="color: #79f179;">node_modules</a> <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📁 public <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📂 src <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_📂 assets - <spam style="font-size: 15px">OBS:. (Tirar do public e colocar no assets)</spam> <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂 components - <spam style="font-size: 15px">OBS:. (Não vem com o projeto default)</spam> <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂 styles - <spam style="font-size: 15px">OBS:. (Não vem com o projeto default)</spam><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂 configs - <spam style="font-size: 15px">OBS:. (Não vem com o projeto default)</spam>  <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂<a href="#styled" id="styled1" style="color: yellow"> global - <spam style="font-size: 15px">OBS:. (Não vem com o projeto default)</spam></a><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📄 <a href="#global1" id="global" style="color: orange">GlobalStyle.tsx</a> <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂<a href="#routes" id="routes1" style="color: #1dc6ec"> routes - <spam style="font-size: 15px">OBS:. (Não vem com o projeto default)</spam></a>   <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📄 <a href="#app1" id="app" style="color: lightgreen">AppRoutes.tsx</a>  <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂 pages - <spam style="font-size: 15px">OBS:.(Não vem com o projeto default)</spam><br>
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
