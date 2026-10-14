import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="flex justify-between gap-4">
      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
      <NavLink>Career</NavLink>
    </div>
  );
};

export default Navbar;
