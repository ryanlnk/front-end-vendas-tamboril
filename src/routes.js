import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Customers from './pages/Customers';
import CustomersForm from './pages/CustomersForm';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/customers" element={<Customers />} />
      <Route path="/customersform" element={<CustomersForm />} />
    </Routes>
  );
};

export default AppRoutes;
