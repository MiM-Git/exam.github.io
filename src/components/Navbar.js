import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';

import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    const path = useLocation()
    const [nav, setNav] = useState(true)
    const myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };
    return (
        <>
            {path.pathname ==='/' || path.pathname==='/login' || path.pathname ==='/register' ?
            <div className="header">
                <ul className="topnav" id="myTopnav">
                    <li className="menu-item">
                        <NavLink exact activeClassName="active" to="/">خانه</NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink activeClassName="active" to="/login">ورود</NavLink>
                    </li>
                    <a className="icon" onClick={myFunction}>
                        <FaBars />
                    </a>
                </ul>
            </div>
            :null
            }
        </>
    )
}

export default Navbar