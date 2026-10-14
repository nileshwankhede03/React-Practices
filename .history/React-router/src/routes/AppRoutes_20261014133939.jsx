import { Route, Routes } from 'react-router';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Career from '../Components/Career';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
