import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import WelcomeOnboard from '../components/WelcomeOnboard';
import Login from '../components/Login';
import WelcomeOnboard from '../components/';

const MyAppRoute = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        { path: 'login', Component: Login },
        { path: 'register', Component: Register },
      ],
    },
    {
      path: '/main',
      element: <WelcomeOnboard />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MyAppRoute;
