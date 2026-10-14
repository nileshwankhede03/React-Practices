import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="p-4 bg-amber-600 rounded-xl text-2xl flex justify-between gap-4">
      <NavLink to="/">Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
      <NavLink>Career</NavLink>
    </div>
  );
};

export default Navbar;
