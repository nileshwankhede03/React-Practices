import About from "./components/About";

const App = () => {
  return <div>Hello

    <About count={23} name = "Nilesh" element={<h1>this h1 from props</h1>}>
    we can pass ant tag or component like this
    <p>This P tag from props</p>
    </About>
  </div>;
};

export default App;
