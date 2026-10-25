import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyAppRoute from './route/MyAppRoute.jsx';
import Conv
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyAppRoute />
  </StrictMode>,
)
