import Home from './components/Home';
import About from './components/About';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Count is : {count}</h1>
        <button>Increament</button>

        <h1>User </h1>
      </div>
      <Home />
      <About />
    </>
  );
};

export default App;
