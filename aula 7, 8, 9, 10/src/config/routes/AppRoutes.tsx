import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UseEffect } from "../../pages/UseEffect";
import { UseRef } from "../../pages/UseRef";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UseEffect />,
    },
    {
        path: "/useRef",
        element: <UseRef />,
    },
]);

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;
