import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import UserCard from './components/UserCard.jsx';
import Form from './components/Form.jsx';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState([]);
  

  // console.log(user);

  const handleUpdate = (email) => {
    console.log(email);
    const result = user.find((elem) => elem.email === email);
    console.log(result)
  };

  return (
    <div className="p-3 h-screen bg-gray-700 flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex gap-6 flex-wrap">
          {user.map((elem) => (
            <UserCard
              user={elem}
              handleUpdate={handleUpdate}
              setToggle={setToggle}
            />
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
