const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">User CRUD</h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#" className="hover:text-white">
            Home
          </a>

          <a href="#" className="hover:text-white">
            Users
          </a>

          <a href="#" className="hover:text-white">
            Add User
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
