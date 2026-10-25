import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from '../page/Home.jsx';
import About from '../page/About.jsx';
import Product from '../page/Product.jsx';

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/product',
      element: <Product />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
