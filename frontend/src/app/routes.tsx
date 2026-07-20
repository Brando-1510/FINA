import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Welcome from '../features/bienvenida';
import AgregarUser from '../features/AgregarUser';

const router = createBrowserRouter([
  { path: '/', element: <Welcome /> },
  { path: '/agregar', element: <AgregarUser /> },
]);

export default function Routesx() {
  return <RouterProvider router={router} />;
}
