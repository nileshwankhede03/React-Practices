import { useState } from "react";

const App = () => {
  console.log("Component re-render")
  const [count , setCount] = useState(0);

  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={()=>{setCount(count + 1)}}>Increase</button>
    </div>
  );
};

export default App;
