import { useState } from "react";

const App = () => {
  const [count , setCount] = useState();
  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={()=>{setCount(count + 1)}}>Increase</button>
    </div>
  );
};

export default App;
