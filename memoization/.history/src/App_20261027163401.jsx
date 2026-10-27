import Home from './components/Home';
import About from './components/About';
import { useState } from 'react';

const App = () => {
  const [count, setcount] = useState(0)
  return (
    <>
      <Home />
      <About />
    </>
  );
};

export default App;
