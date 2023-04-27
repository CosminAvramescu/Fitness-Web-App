import './App.css';
import Homepage from "./Component/Homepage/Homepage";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./Component/NavbarComp";

function App() {
  return (
      <div className="App">
        <NavbarComp/>
      </div>
  );
}

export default App;
