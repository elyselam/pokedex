import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Modal from "./Modal";
import CustomGallery from "./CustomGallery";

export default Routes = () => {
  <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/Add" element={<Modal />} />
    <Route path="/CustomGallery" element={<CustomGallery />} />
  </Routes>;
};
