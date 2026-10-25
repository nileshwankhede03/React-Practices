import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

const MyAppRoute = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Hello World</div>,
    },
    {
      path: '/main',
      element: WelcomeOnboard/>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MyAppRoute;
