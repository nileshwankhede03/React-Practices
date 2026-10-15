import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router';

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
