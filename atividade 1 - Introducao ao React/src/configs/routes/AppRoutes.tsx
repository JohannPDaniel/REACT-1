// instale o React-Router-Dom com o comando: npm install react-router-dom

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '../../pages/home/Home';
import { ListaMercado } from '../../pages/ListaMercado';
import { Sobre } from "../../pages/Sobre";


const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/lista-mercado',
		element: <ListaMercado />,
	},
	{
		path: '/sobre',
		element: <Sobre />,
	},
]);
function AppRoutes() {
	return <RouterProvider router={routes} />;
}

export default AppRoutes;
