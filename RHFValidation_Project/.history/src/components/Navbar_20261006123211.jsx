import React from 'react';

const Navbar = () => {
  return (
    <div className=" p-4 bg-black text flex items-center justify-between">
      <div>
        {/* <img src="" alt="" /> */}
        <h1>Logo</h1>
      </div>

      <div className="flex gap-6 font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      <button>Create</button>
    </div>
  );
};

export default Navbar;
