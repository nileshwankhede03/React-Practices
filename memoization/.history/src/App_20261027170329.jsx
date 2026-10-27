import Home from './components/Home';
import About from './components/About';
import { useCallback, useMemo, useState } from 'react';

const App = () => {
  console.log('App re-render');
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'Devendra', id: 789 });

  const calculation = useMemo(() => {
    let sum = 0;
    for (let index = 0; index < 1000000000; index++) {
      sum += index;
    }

    return sum;
  }, []);

  const greet = useCallback(() => {
    console.log('greet from INDIA!');
  }, []); // saved refence so it will stop re-render

  return (
    <>
      <div>
        <h1>Count is : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increament</button>

        <h2>User is : {user?.name}</h2>
        <button onClick={() => setUser({ ...user, name: 'Nilesh' })}>
          Change user
        </button>

        <p>calculation's {calculation}</p>
      </div>

      <Home user={user} greet={greet} />
      <About user={user} greet={greet} />
    </>
  );
};

export default App;
