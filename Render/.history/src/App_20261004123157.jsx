import { useState } from 'react';
// // const App = () => {
// //   let count = 1;

// //   console.log('Inside near parent cnt is : ', count);

// //   return (
// //     <div>
// //       <h1>Count is : {count}</h1>

// //       <button
// //         onClick={() => {
// //           count++;
// //           App();
// //           console.log('Inside btn cnt is : ', count);
// //         }}
// //       >
// //         Increment
// //       </button>
// //     </div>
// //   );
// // };

// // export default App;

// const App = () => {
//   let [count, setCount] = useState({
//     name: 'Nilesh',
//     age: 23,
//   });
//   console.log('App re-render');

//   return (
//     <div>
//       <h1>Name is : {count.name}</h1>

//       <button
//         onClick={() => {
//           setCount({
//             name: 'Nilesh',
//             age: 23,
//           });
//         }}
//       >
//         Increment
//       </button>
//     </div>
//   );
// };

// export default App;

const App = () => {
  let [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev)count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default App;
