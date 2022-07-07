import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Customers from './pages/Customers';
import CustomersForm from './pages/CustomersForm';
import Categories from './pages/Categories';
import CategoriesForm from './pages/CategoriesForm';
import Payments from './pages/Payments';
import PaymentsForm from './pages/PaymentsForm';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Customers */}
      <Route path="/customers" element={<Customers />} />
      <Route path="/customersform" element={<CustomersForm />} />
      <Route path="/customersform/:id" element={<CustomersForm />} />

      {/* Categories */}
      <Route path="/categories" element={<Categories />} />
      <Route path="/categoriesform" element={<CategoriesForm />} />
      <Route path="/categoriesform/:id" element={<CategoriesForm />} />

      {/* Pagamentos */}
      <Route path="/payments" element={<Payments />} />
      <Route path="/paymentsform" element={<PaymentsForm />} />
      <Route path="/paymentsform/:id" element={<PaymentsForm />} />
    </Routes>
  );
};

export default AppRoutes;
