import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from '../page/Home.jsx';

const AppRoutes = () => {
  const router = createBrowserRouter([{
    path = "/",
    element : <Home/>
  },{},{}]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
