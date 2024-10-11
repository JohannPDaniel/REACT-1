import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UseEffect } from "../../pages/UseEffect";
import { UseRef } from "../../pages/UseRef";
import { UseState } from "../../pages/UseState";
import { UseMemo } from "../../pages/UseMemo";
import { UseCallBack } from "../../pages/UseCallBack";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UseState />,
    },
    {
        path: "/useEffect",
        element: <UseEffect />,
    },
    {
        path: "/useRef",
        element: <UseRef />,
    },
    {
        path: "/useMemo",
        element: <UseMemo />
    },
    {
        path: '/useCallBack',
        element: <UseCallBack />
    }
]);

function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;
