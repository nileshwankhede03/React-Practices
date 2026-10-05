import About from "./components/About";

const App = () => {
  return <div>Hello

    <About count={23} name = "Nilesh" element={<h1>this h1 from props</h1>}>
    </About>
  </div>;
};

export default App;
