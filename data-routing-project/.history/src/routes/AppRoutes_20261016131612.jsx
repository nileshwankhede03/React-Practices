import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

const AppRoutes = () => {
  const router = createBrowserRouter();
  
  return <RouterProvider router={router} />;
};

export default AppRoutes;
