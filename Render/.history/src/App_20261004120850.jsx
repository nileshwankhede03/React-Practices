
const App = () => {

  let count = 0;

  console.log(count);

  return (
    <div>
      <h1>Count is : {count}</h1>

      <button onClick={()}>Increment</button>
    </div>
  )
}

export default App
