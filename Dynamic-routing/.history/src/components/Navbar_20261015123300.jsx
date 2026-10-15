import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="bg-black text-white rounded p-5 flex items-center justify-between">
      <div>Logo</div>

      <div className="flex gap-10 text-xl">
        <NavLink>Home<NavLink/>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Products</p>
      </div>

      <button>Login</button>
    </div>
  );
};

export default Navbar;
