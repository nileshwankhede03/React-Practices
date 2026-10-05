import { useState } from 'react';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState([]);

  return (
    <>
      {toggle ? (
        <Login setToggle={setToggle} />
      ) : (
        <Register setUser={setUser} setToggle={setToggle} />
      )}
    </>
  );
};

export default App;
