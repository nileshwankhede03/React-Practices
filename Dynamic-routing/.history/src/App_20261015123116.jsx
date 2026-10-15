import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Product from './pages/Product.jsx';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
