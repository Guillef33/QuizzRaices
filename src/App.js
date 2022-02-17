import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import AppProvider, { AppContext } from "./context/AppContext";
import Home from './pages/Home';
import Box from "./pages/Box";
import NotFound from './pages/NotFound';


export default function App() {

  return (
    <AppProvider value={{ AppContext }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/box" element={<Box />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
