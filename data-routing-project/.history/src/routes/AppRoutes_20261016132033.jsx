import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from '../page/Home.jsx';

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
        path : '/about',
        element : <Abo/>
    },
    {},
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
