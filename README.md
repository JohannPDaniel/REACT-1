# React 1

<h2 align="center">Preset inicial para começar um projeto React-ts</h2> 

<h3 align="center">Criar a pasta para iniciar o projeto React</h3> 

```bash
npx create-vite@latest my-react-app --template react-ts
```

<h3 align="center">(👉 Instalar a node_modules 👈)</h3> 

```bash
npm install
```

<h3 align="center">Instalar o React Router Dom</h3>

```bash
npm install react-router-dom
```

<h3 align="center">Instalar o Styled-Components</h3> 

```bash
npm install styled-components @types/styled-components
```
---

<h3 align="center">AppRoutes.tsx</h3> 

```jsx
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

<h3 align="center">
    GlobalStyles.tsx
</h3>

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
<h3 align="center">
    Estrutura de pastas do projeto
</h3>

<p>
    📁 my-react-app<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📁 node_modules<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📁 public <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    📂 src <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_📂 assets - OBS:. (Tirar do public e colocar no assets) <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂 components - OBS:. (Não vem com o projeto default) <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂 styles - OBS:. (Não vem com o projeto default)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂 configs - OBS:. (Não vem com o projeto default) <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂 global - OBS:. (Não vem com o projeto default)<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📄 GlobalStyle.tsx<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📂 routes -OBS:. (Não vem com o projeto default)  <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    |_ 📄 AppRoutes.tsx <br>
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
