import { Route, Routes } from 'react-router';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Home';
import Career from '../Components/Home';

const AppRoutes = () => {
  return (
    <div className="flex justify-between gap-4">
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='' element={<About/>} />
        <Route path='' element={<Contact/>} />
        <Route path='' element={} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
