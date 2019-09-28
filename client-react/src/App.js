import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from "./components/main/Header";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Authenticate from "./screens/Authenticate";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="component-render">
          <Route exact path="/" component={Home} />
          <Route path="/authenticate" component={Authenticate} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    </div>
  );
}

export default App;