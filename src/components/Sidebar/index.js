import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        {/* Logo */}
        <div className="-mx-6 px-6 py-4 content-center">
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
              alt="Logo"
              className="w-32 mx-auto"
            />
          </a>
        </div>

        {/* Menu */}
        <ul className="space-y-2 tracking-wide mt-1">
          <li>
            <Link
              className="px-4 py-3 flex items-center space-x-4 bg-gray-300 rounded-xl text-gray-900 hover:text-gray-100"
              to={'/customers'}
            >
              Clientes
            </Link>
          </li>
        </ul>

        <ul className="space-y-2 tracking-wide mt-1">
          <li>
            <Link
              className="px-4 py-3 flex items-center space-x-4 bg-gray-300 rounded-xl text-gray-900 hover:text-gray-100"
              to={'/categories'}
            >
              Categorias
            </Link>
          </li>
        </ul>

        <ul className="space-y-2 tracking-wide mt-1">
          <li>
            <Link
              className="px-4 py-3 flex items-center space-x-4 bg-gray-300 rounded-xl text-gray-900 hover:text-gray-100"
              to={'/payments'}
            >
              Pagamentos
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
