import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import UserCard from './components/UserCard.jsx';
import Form from './components/Form.jsx';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  console.log(user);

  const handleUpdate = (email) => {
    // console.log(email);

    const result = user.find((elem) => elem.email === email);
    const index = user.findIndex((elem) => elem.email === email);
    // console.log(result);
    // console.log(index);

    setEditIndex(index);
    setEditUser(result);
  };

  const handleDelete = (email) => {
    console.log(email);
  };

  return (
    <div className="p-3 h-screen bg-gray-700 flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex gap-6 flex-wrap">
          {user?.map((elem, idx) => (
            <UserCard
              key={idx}
              user={elem}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              setToggle={setToggle}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form
            editUser={editUser}
            setUser={setUser}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
            setEditUser={setEditUser}
          />
        </div>
      )}
    </div>
  );
};

export default App;
