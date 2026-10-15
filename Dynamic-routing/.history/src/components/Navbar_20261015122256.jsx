import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div>Logo</div>

      <div>
        <p className='cursor-pointer'>Home</p>
        <p>Cart</p>
      </div>

      <button>Login</button>
    </div>
  );
};

export default Navbar;
