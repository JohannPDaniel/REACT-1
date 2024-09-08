import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
	},
	{
		path: '/home',
		element: <Home />,
	},
]);

function AppRoutes() {
	return <RouterProvider router={router} />;
}

export default AppRoutes;
