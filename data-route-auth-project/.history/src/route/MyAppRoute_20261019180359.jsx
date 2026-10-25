import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

const MyAppRoute = () => {
    const router = createBrowserRouter()
  return <RouterProvider router={router} />;
};

export default MyAppRoute;
