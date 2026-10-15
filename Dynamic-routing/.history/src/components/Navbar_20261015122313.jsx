import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div>Logo</div>

      <div className='flex gap-'>
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Cart</p>
      </div>

      <button>Login</button>
    </div>
  );
};

export default Navbar;
