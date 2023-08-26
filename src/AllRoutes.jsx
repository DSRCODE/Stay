import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/HomePage/Home';
import Services from './Pages/ServicesPage/Services';
import Tenant from "./Pages/TenantPage/Tenant";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/tenant" element={<Tenant />} />
    </Routes>
  );
};

export default AllRoutes;
