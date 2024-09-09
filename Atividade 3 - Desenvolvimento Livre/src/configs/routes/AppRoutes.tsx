// instale o React-Router-Dom com o comando: npm install react-router-dom

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <h1>Olá mundo</h1>,
	},
]);

function AppRoutes() {
	return <RouterProvider router={router} />;
}

export default AppRoutes;
