import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import WelcomeOnboard from '../components/WelcomeOnboard';

const MyAppRoute = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      
    },
    {
      path: '/main',
      element: <WelcomeOnboard/>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MyAppRoute;
