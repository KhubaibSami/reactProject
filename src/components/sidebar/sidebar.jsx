import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white h-screen w-1/6 fixed top-0 left-0 overflow-y-auto mt-16">
      <div className="p-4">
        <h1 className="text-2xl font-bold">categories</h1>
      </div>

      <ul className="list-none p-0">
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <a href="#" className="text-white">price</a>
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <a href="#" className="text-white">requests</a>
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <a href="#" className="text-white">complaint</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
