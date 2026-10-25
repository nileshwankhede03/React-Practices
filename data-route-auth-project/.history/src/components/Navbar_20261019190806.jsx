export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-orange-500">
          MyApp
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="font-medium text-orange-500">
            Home
          </a>
          <a
            href="#"
            className="font-medium text-gray-600 transition hover:text-orange-500"
          >
            About
          </a>
          <a
            href="#"
            className="font-medium text-gray-600 transition hover:text-orange-500"
          >
            Services
          </a>
          <a
            href="#"
            className="font-medium text-gray-600 transition hover:text-orange-500"
          >
            Contact
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="/login"
            className="rounded-lg px-4 py-2 font-semibold text-gray-700 transition hover:text-orange-500"
          >
            Login
          </a>
          <a
            href="/register"
            className="rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Icon - Static */}
        <button
          className="text-2xl text-gray-700 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
