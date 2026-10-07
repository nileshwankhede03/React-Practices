import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import UserCard from './components/UserCard.jsx';
import Form from './components/Form.jsx';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState([]);

  return (
    <div className="p-3 h-screen bg-gray-700 flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex ga">
          {user.map((elem) => (
            <UserCard user={elem} setToggle={setToggle} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form setUser={setUser} />
        </div>
      )}
    </div>
  );
};

export default App;
