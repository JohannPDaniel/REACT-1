import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from "../../pages/Home";
import { Presenca } from "../../pages/Presenca";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: "/presenca",
        element: <Presenca />
    }
]);

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;