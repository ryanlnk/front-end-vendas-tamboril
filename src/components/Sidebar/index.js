import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo_verde.png';

const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        {/* Logo */}
        <div className="-mx-6 px-6 py-4 content-center">
          <a href="/">
            <img src={logo} alt="Logo" className="w-32 mx-auto" />
          </a>
        </div>

        {/* Menu */}
        {/* Vendas */}
        <ul className="space-y-2 tracking-wide mt-1">
          <li>
            <Link
              className="px-4 py-3 flex items-center space-x-4 bg-gray-300 rounded-xl text-gray-900 hover:text-gray-100"
              to={'/#'}
            >
              Vendas
            </Link>
          </li>
        </ul>

        {/* Produtos */}
        <ul className="space-y-2 tracking-wide mt-1">
          <li>
            <Link
              className="px-4 py-3 flex items-center space-x-4 bg-gray-300 rounded-xl text-gray-900 hover:text-gray-100"
              to={'/products'}
            >
              Produtos
            </Link>
          </li>
        </ul>

        {/* Clientes */}
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

        {/* Vendedores */}
        <ul className="space-y-2 tracking-wide mt-1">
          <li>
            <Link
              className="px-4 py-3 flex items-center space-x-4 bg-gray-300 rounded-xl text-gray-900 hover:text-gray-100"
              to={'/sellers'}
            >
              Vendedores
            </Link>
          </li>
        </ul>

        {/* Pagamentos */}
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

        {/* Categorias */}
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

        {/* Contas Bancárias */}
        <ul className="space-y-2 tracking-wide mt-1">
          <li>
            <Link
              className="px-4 py-3 flex items-center space-x-4 bg-gray-300 rounded-xl text-gray-900 hover:text-gray-100"
              to={'/banks'}
            >
              Contas Bancárias
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
