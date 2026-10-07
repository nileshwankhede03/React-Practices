import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import UserCard from './components/UserCard.jsx';

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="p-3 h-screen bg-gray-700 flex flex-col gap-4">
      <Navbar />

      {toggle ?       <div className='flex'>
        <UserCard />
      </div> }


    </div>
  );
};

export default App;
