import './App.css';
import Homepage from "./Component/Homepage/Homepage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom/dist";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
