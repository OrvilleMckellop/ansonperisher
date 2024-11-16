import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const routes = [
        {name: "Dashboard", route: "/dashboard", icon: ""},
        {name: "Profile", route: "/profile", icon: ""},
        {name: "About", route: "/about", icon: ""},
        {name: "Settings", route: "/settings", icon: ""}
    ]
  return (
    <div className=" bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">
            <div className="md:relative mx-auto lg:float-left lg:px-6">
                <h3 className='text-3xl text-white uppercase font-bold'>User</h3>
               <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
                {routes.map((route) => (
                    <li className="mr-3 flex-1">
            
                    <Link to={route.route} className='block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500'><i className="fas fa-link pr-0 md:pr-3"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">{route.name}</span></Link>
       
                 </li>
                )
                )}
                 <li className="mr-3 flex-1">
                    <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                    <i className="fas fa-link pr-0 md:pr-3"></i><Link to='/'><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Sign Out</span></Link>
                    </a>
                 </li>
               </ul>
            </div>
         </div>
  );
};

export default Sidebar;
