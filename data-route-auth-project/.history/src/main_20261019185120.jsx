import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MyAppRoute from './route/MyAppRoute.jsx';
import { ContextProvider } from './context/UserContext.jsx';
createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <MyAppRoute />
  </ContextProvider>,
);
