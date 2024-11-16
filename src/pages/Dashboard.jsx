import React from 'react';
import Layout from '../components/Layout';

const Dashboard = () => {
  const pendingAuthorizations = [
    { id: 1, name: 'Jon Doe', role: 'Business', imgSrc: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Jane Gómez', role: 'User', imgSrc: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Carl James', role: 'User', imgSrc: 'https://via.placeholder.com/40' },
    { id: 4, name: 'Laura Michelle', role: 'Business', imgSrc: 'https://via.placeholder.com/40' },
    { id: 5, name: 'Ana Brown', role: 'User', imgSrc: 'https://via.placeholder.com/40' }
  ];

  const transactions = [
    { id: 1, name: 'Carl James', date: '27/07/2023', amount: 1500 },
    { id: 2, name: 'Carl James', date: '02/08/2023', amount: 1950 },
    { id: 3, name: 'Ana Brown', date: '15/08/2023', amount: 1200 }
  ];

  return (
    <Layout>
        <div className="w-full">

          <div className="w-full">
            {/* Search Bar */}
            <div className="relative max-w-md w-full mb-8">
              <div className="absolute top-1 left-2 inline-flex items-center p-2">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
                type="search"
                placeholder="Search..."
              />
            </div>

            {/* Users Chart */}
            <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2 mb-8">
              <h2 className="text-gray-500 text-lg font-semibold pb-1">Users</h2>
              <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
              <canvas id="usersChart"></canvas>
            </div>

            {/* Pending Authorizations Table */}
            <div className="bg-white p-4 shadow rounded-lg mb-8">
              <h2 className="text-gray-500 text-lg font-semibold pb-4">Pending Authorizations</h2>
              <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="text-sm leading-normal">
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-gray-500 border-b border-grey-light">Photo</th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-gray-500 border-b border-grey-light">Name</th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-gray-500 border-b border-grey-light">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingAuthorizations.map((auth) => (
                    <tr key={auth.id} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b border-grey-light">
                        <img src={auth.imgSrc} alt="Profile Picture" className="rounded-full h-10 w-10" />
                      </td>
                      <td className="py-2 px-4 border-b border-grey-light">{auth.name}</td>
                      <td className="py-2 px-4 border-b border-grey-light">{auth.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-right mt-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                  See more
                </button>
              </div>
            </div>

            {/* Transactions Table */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-gray-500 text-lg font-semibold pb-4">Transactions</h2>
              <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="text-sm leading-normal">
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-gray-500 border-b border-grey-light">Name</th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-gray-500 border-b border-grey-light">Date</th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-gray-500 border-b border-grey-light text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b border-grey-light">{transaction.name}</td>
                      <td className="py-2 px-4 border-b border-grey-light">{transaction.date}</td>
                      <td className="py-2 px-4 border-b border-grey-light text-right">${transaction.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default Dashboard;
