import React from 'react';

const Navbar = () => {
  return (
    <div className=" p-4 bg-black rounded text-white flex items-center justify-between">
      <div>
        <img
        width={35}
          src="https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
        />
      </div>

      <div className="flex gap-6 font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      <button className="p-2 bg-blue-700 cursor-pointer rounded">Create</button>
    </div>
  );
};

export default Navbar;
