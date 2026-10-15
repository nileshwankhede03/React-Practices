import { Routes, Route } from 'react-router';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Product from '../pages/Product.jsx';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/detail/:id" element={<Pro />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
