import { useState } from 'react';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState([]); // lift up state , pass ref then add data in child

  console.log('Inside app User Data -> ', user);

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
