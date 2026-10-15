import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Pr from './pages/Product.jsx';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
