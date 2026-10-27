import Home from './components/Home';
import About from './components/About';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'Devendra', id: 789 });
  return (
    <>
      <div>
        <h1>Count is : {count}</h1>
        <button>Increament</button>

        <h1>User is : {user}</h1>
        <button onClick={() => setUser({ ...user, name: 'Nilesh' })}>
          Change user
        </button>
      </div>

      <Home />
      <About />
    </>
  );
};

export default App;
