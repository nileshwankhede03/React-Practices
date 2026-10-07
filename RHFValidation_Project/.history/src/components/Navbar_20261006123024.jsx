import React from 'react';

const Navbar = () => {
  return <div className='bg-amber-300 p-4 flex items-center justify-between'>
    <div>
        {/* <img src="" alt="" /> */}
        <h1>Logo</h1>
    </div>

    <div className='flex gap-6'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
    </div>

    <button>Create</button>
  </div>;
};

export default Navbar;
