import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/HomePage/Home';
import ChooseStay from "./Components/ChosseStay/ChooseStay";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/choose" element={<ChooseStay />} />
    </Routes>
  );
};

export default AllRoutes;
