// console.log(React)
console.log(ReactDOM);

let rh1 = React.createElement(
  'h1',
  {},
  React.createElement('span', null, 'I am under h1'),
);

// console.log(rh1);

// select 1 element of realDom so reactDom can put all elements there
let realDomElement = document.querySelector("#root");

// make reactDOM root to that real dom element

let reactRoot = ReactDOM.createRoot(realDomElement);
re
