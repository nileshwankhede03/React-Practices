import Home from './components/Home';
import About from './components/About';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({})
  return (
    <>
      <div>
        <h1>Count is : {count}</h1>
        <button>Increament</button>

        <h1>User is : {}</h1>
        <button>Change user</button>
      </div>

      <Home />
      <About />
    </>
  );
};

export default App;
