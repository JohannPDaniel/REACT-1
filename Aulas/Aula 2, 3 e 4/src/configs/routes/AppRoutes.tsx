import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Error } from "../../pages/Error";
import { SobreNos } from "../../pages/Sobre";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />
	},
	{
		path: '/about',
		element: <SobreNos />
	},
]);

export function AppRoutes() {
	return <RouterProvider router={router} />;
}
