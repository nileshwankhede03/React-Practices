// console.log(window);
// console.log(React);
// console.log(ReactDOM);

let h1 = React.createElement('h1', {class : "Box"}, 'this is h1 from react');

document.body(h1)

let realDOMElement = document.querySelector("#root");

let reactRoot = ReactDOM.createRoot(realDOMElement);

reactRoot.render(h1);