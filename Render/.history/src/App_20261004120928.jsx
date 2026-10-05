
const App = () => {

  let count = 0;

  console.log(count);

  return (
    <div>
      <h1>Count is : {count}</h1>

      <button onClick={()=>{
        count++;
        console.log("Inside btn cnt is : ", count)
      }}>Increment</button>
    </div>
  )
}

export default App
