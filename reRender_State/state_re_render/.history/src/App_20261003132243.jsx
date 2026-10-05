import { useState } from 'react';

const App = () => {
  console.log('Component re-render');
  const [count, setCount] = useState(true);

  console.log(count);
  return (
    <div>
      <h1>Count is : {count}</h1>
      <button
        onClick={() => {
          setCount(false);
        }}
      >
        Change Boolean
      </button>
    </div>
  );
};

export default App;
