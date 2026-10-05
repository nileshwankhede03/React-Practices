const App = () => {
  let count = 0;

  console.log('Inside near parent cnt is : ', count);

  return (
    <div>
      <h1>Count is : {count}</h1>

      <button
        onClick={() => {
          count++;
          App();
          console.log('Inside btn cnt is : ', count);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default App;
