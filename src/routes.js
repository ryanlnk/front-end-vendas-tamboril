import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sales from './pages/Sales';
import SalesForm from './pages/SalesForm';
import Products from './pages/Products';
import ProductsForm from './pages/ProductsForm';
import Customers from './pages/Customers';
import CustomersForm from './pages/CustomersForm';
import Sellers from './pages/Sellers';
import SellersForm from './pages/SellersForm';
import Payments from './pages/Payments';
import PaymentsForm from './pages/PaymentsForm';
import Categories from './pages/Categories';
import CategoriesForm from './pages/CategoriesForm';
import BankAccounts from './pages/BankAccounts';
import BankAccountsForm from './pages/BankAccountsForm';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Vendas */}
      <Route path="/sales" element={<Sales />} />
      <Route path="/salesform" element={<SalesForm />} />
      <Route path="/salesform/:id" element={<SalesForm />} />

      {/* Produtos */}
      <Route path="/products" element={<Products />} />
      <Route path="/productsform" element={<ProductsForm />} />
      <Route path="/productsform/:id" element={<ProductsForm />} />

      {/* Clientes */}
      <Route path="/customers" element={<Customers />} />
      <Route path="/customersform" element={<CustomersForm />} />
      <Route path="/customersform/:id" element={<CustomersForm />} />

      {/* Vendedores */}
      <Route path="/sellers" element={<Sellers />} />
      <Route path="/sellersform" element={<SellersForm />} />
      <Route path="/sellersform/:id" element={<SellersForm />} />

      {/* Pagamentos */}
      <Route path="/payments" element={<Payments />} />
      <Route path="/paymentsform" element={<PaymentsForm />} />
      <Route path="/paymentsform/:id" element={<PaymentsForm />} />

      {/* Categorias */}
      <Route path="/categories" element={<Categories />} />
      <Route path="/categoriesform" element={<CategoriesForm />} />
      <Route path="/categoriesform/:id" element={<CategoriesForm />} />

      {/* Contas Bancárias */}
      <Route path="/banks" element={<BankAccounts />} />
      <Route path="/banksform" element={<BankAccountsForm />} />
      <Route path="/banksform/:id" element={<BankAccountsForm />} />
    </Routes>
  );
};

export default AppRoutes;
