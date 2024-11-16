// src/pages/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center "
      style={{
        backgroundImage: `url('/background.jpg')`,
        fontFamily: "'Lato', sans-serif",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Login form container */}
      <div className="relative bg-white max-w-lg mx-auto p-8 md:p-12 rounded-lg shadow-2xl w-full">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Anson Perisher</h1>
        </header>

        <main>
          <section>
            <p className="text-gray-600 pt-2 text-center">Sign in to your account.</p>
          </section>

          <section className="mt-10">
            <form className="flex flex-col" >
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-500 transition duration-500 px-3 pb-3"
                />
              </div>
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-500 transition duration-500 px-3 pb-3"
                />
              </div>
              <div className="flex justify-end">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline mb-6">
                  Forgot your password?
                </a>
              </div>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                <Link to="/dashboard">Login</Link>
              </button>
            </form>
          </section>
        </main>

        <div className="text-center mt-12 mb-6">
          <p className="text-gray-800">
          To obtain login information, please contact our DFAR compliance team at <a href='https://www.acquisition.gov/sites/default/files/current/dfars/pdf/DFARS.pdf' className='text-blue-400'>compliance@ansonperisher.com</a>
          
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
