import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink, Link } from "react-router-dom";
import SignUpForm from "./pages/signup/SignUpForm";
import SignInForm from "./pages/login/LoginForm";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import AppImg from "./images/app.png"

// 

import "./App.css";

class App extends Component {
  render() {
    return (


      <Router basename="/react-auth-ui/">
        <div className="header">
          <h1>React-SignIn-SignUp Form</h1>
          <nav className='nav'>
            <ul>

              <li> <Link to="/">Signup</Link> </li>
              <li> <Link to="/sign-in">SignIn</Link> </li>
              <li> <Link to="/about">About</Link> </li>
              <li> <Link to="/contact">Contact Us</Link> </li>
            </ul>
          </nav>

        </div>


        <div className="App">
          <div className="appAside">
            <img src={AppImg} alt="" />
          </div>
          <div className="appForm">

            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/sign-in" component={SignInForm} />
            <Route exact path="/" component={SignUpForm} />
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
