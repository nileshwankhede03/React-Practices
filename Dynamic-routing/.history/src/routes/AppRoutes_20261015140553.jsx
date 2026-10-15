import { Routes, Route } from 'react-router';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Product from '../pages/Product.jsx';
import ProductDetail from '../pages/ProductDetail.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/products" element={<Product />} />
        <Route path="/detail/:id" element={<ProductDetail />} /> // dynamic
        route
      </Routes>
    </div>
  );
};

export default AppRoutes;
