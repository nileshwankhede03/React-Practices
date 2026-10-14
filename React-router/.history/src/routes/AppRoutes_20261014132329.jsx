import { Route, Routes } from 'react-router';
import Home from '../Components/Home';
import Home from '../Components/About';
import Home from '../Components/Home';
import Home from '../Components/Home';

const AppRoutes = () => {
  return (
    <div className="flex justify-between gap-4">
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='' element={} />
        <Route path='' element={} />
        <Route path='' element={} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
