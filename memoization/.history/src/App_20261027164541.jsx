import Home from './components/Home';
import About from './components/About';
import { useState } from 'react';

const App = () => {
  console.log('App re-render');
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'Devendra', id: 789 });

  const calculation = () => {
    let sum = 0;
    for (let index = 0; index < 1000000000; index++) {
      sum += index;
    }
    return sum;
  };

  return (
    <>
      <div>
        <h1>Count is : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increament</button>

        <h2>User is : {user?.name}</h2>
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
