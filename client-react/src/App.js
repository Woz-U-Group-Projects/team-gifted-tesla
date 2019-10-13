import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./components/main/Header";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Login from './components/authorization/Userlogin';
import Signup from './components/authorization/Usersignup';
import UserProfile from './screens/UserProfile';
import ListMotherboards from "./screens/ListMotherboards";
import ListGraphics from "./screens/ListGraphics";
import FooterComponent from "./components/main/Footer";


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
          <Route path="/motherboards" component={ListMotherboards} />
          <Route path="/graphics" component={ListGraphics} />
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;