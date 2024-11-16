import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 p-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-5 col-span-1 bg-white p-6 rounded-lg shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
