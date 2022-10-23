import React from "react";
import './Header.css'
import Navbar from "./Navbar";
import logo from '../images/LOGO.png'
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
function Header() {
    return (
        <Router>
            <div className="header">
                <img className="site-logo" src={logo}></img>
                <Route path="/login" component={Login} />
                <Navbar />
            </div>
        </Router>
    );
}

export default withRouter(Header)