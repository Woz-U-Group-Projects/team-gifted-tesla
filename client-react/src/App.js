import React from "react";
import Project from "./Project";
import "./App.css";

import Motherboards from "./components/datafetchers/Motherboards";

function App() {
  return (
    <div className="App">
      <Motherboards uri="http://localhost:3000/motherboards/data" />
    </div>
  );
}

export default App;
