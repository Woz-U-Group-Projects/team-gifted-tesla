import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from "./components/main/Header";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Login from './components/authorization/Userlogin';
import Signup from './components/authorization/Usersignup';
import UserProfile from './screens/UserProfile';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="component-render">
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={UserProfile} />
        </div>
      </Router>
    </div>
  );
}

export default App;