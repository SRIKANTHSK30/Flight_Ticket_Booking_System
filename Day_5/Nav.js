import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
// import { GiRocketThruster } from "react-icons/gi";
import logo from "../Flight/logotrans.png"
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import Home from "../Flight/Home";
import MediaCard from "../Flight/Card";
import Display from "../Flight/Display";
import Contacts from "../Flight/Contact";
import Footer from "../Flight/Footer";
import logo1 from "../Flight/wall.jpg"

import Download from "./Download";
import Travel from "./Travel";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
          <img src={logo} className='navbar-icon'/>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/book"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  MY BOOKING
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  SUPPORT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/card"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  TRIP IDEAS
                </NavLink>
     
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  CONTACT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  PROFILE
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
      <div className='main'>
        <img src={logo1} height={576} width={1520}/>
        <div className="overlay"></div>
        <div className="content">
            <h1>CREATE YOUR MEMORIES WITH US !!!</h1>
        </div>  
    </div>
      <Home/>
      <Display/>
      <Travel/>
      <MediaCard/>
      <Download/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default Navbar;