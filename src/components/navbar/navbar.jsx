import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed bg-gray-800 text-white p-3 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-gray-300 font-bold text-lg cursor-pointer">Your Logo</div>

        <div className="hidden lg:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">Navbar</a>
          <a href="#" className="text-white hover:text-gray-400">About</a>
          <a href="#" className="text-white hover:text-gray-400">Contact</a>

          <div className="group relative">
            <button className="text-white hover:text-gray-400 focus:outline-none">
              Categories
            </button>
            <div className="absolute hidden bg-gray-700 text-gray-300 py-2 px-4 space-y-2 group-hover:block">
              <a href="#" className="block hover:text-gray-400">Cleaning</a>
              <a href="#" className="block hover:text-gray-400">Installation</a>
              <a href="#" className="block hover:text-gray-400">Repairing</a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 hover:text-white">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
