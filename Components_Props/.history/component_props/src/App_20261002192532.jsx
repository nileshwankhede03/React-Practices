import About from "./components/About";
import Test from "./components/Test";

const App = () => {
  return <div>
    <h3>Hello from App.jsx</h3>
    <About count={23} name = "Nilesh" element={<h1>this h1 from props</h1>}>
    {/* we can pass ant tag or component like this */}
    <Test />
    </About>
  </div>;
};

export default App;
