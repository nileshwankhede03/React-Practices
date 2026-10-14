import React from 'react';

const Navbar = () => {
  return (
    <nav class="bg-white shadow-md px-6 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <h1 class="text-2xl font-bold text-orange-500">ShopKart</h1>

        <div class="flex items-center gap-8">
          <a
            class="text-gray-700 font-medium hover:text-orange-500 transition"
          >
            Home
          </a>

          <a
            href="/cart"
            class="flex items-center gap-2 text-gray-700 font-medium hover:text-orange-500 transition"
          >
            Cart
            <span class="bg-orange-500 text-white text-xs rounded-full px-2 py-1">
              0
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
