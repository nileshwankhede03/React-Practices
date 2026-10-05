import { useState } from 'react';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

const App = () => {
  const [toggle, settoggle] = useState(false);
  return <>{toggle ? <Login settoggle={settoggle} /> : <Register />}</>;
};

export default App;
