import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Customers from './pages/Customers';
import CustomersForm from './pages/CustomersForm';
import Categories from './pages/Categories';
import CategoriesForm from './pages/CategoriesForm';

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
    </Routes>
  );
};

export default AppRoutes;
