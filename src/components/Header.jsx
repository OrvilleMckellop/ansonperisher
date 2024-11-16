import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="w-full items-center bg-white  flex justify-between sm:justify-end">
      <button
        className="text-gray-500 focus:outline-none sm:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="relative flex items-center">
        <button className="w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400">
          <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" alt="Profile" />
        </button>
      </div>

    </header>
  );
};

export default Header;
