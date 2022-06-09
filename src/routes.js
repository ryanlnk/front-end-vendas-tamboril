import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Customer from './pages/Customer';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/customer" element={<Customer />} />
    </Routes>
  );
};

export default AppRoutes;
