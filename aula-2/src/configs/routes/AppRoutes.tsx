import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/about',
		element: (
			<div>
				<h1>Hello World</h1>
			</div>
		),
	},
]);

export function AppRoutes() {
	return <RouterProvider router={router} />;
}
