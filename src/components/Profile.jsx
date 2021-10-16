/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Profil } from "../styledComponents/Profil.style";

const Profile = ({ loggedIn, setUsers }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const logOut = () => {
    setUsers(null);
  };

  return loggedIn ? (
    <div className='main'>
      
      <Profil>
        { <IconContext.Provider value={{ color: "fff", marginLeft: "3rem" }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <div
                id='toggle'
                className={sidebar ? "active" : ""}
                onClick={showSidebar}></div>
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className='nav-menu-items'>
              <li className='navbar-toggle' onClick={showSidebar}>
                <Link to='#' className='menu-bars'></Link>
              </li>
              <li className='nav-text'>
                <Link to='/profile'>
                  <CgIcons.CgProfile size={30} />
                  <span>Profile: {loggedIn.name}</span>
                </Link>
              </li>
              <li className='nav-text'>
                <Link to='/calculation'>
                  <FaIcons.FaCalculator size={30} />
                  <span>Calculation</span>
                </Link>
              </li>
              <li className='nav-text'>
                <Link to='/changepassword'>
                  <AiIcons.AiOutlineSetting size={30} />
                  <span>Change Password</span>
                </Link>
              </li>
              <li className='nav-text'>
                <Link to='/manual'>
                  <IoIcons.IoIosPaper size={30} />
                  <span>Manual</span>
                </Link>
              </li>
              <li className='nav-text'>
                <Link to='/profile' onClick={logOut}>
                  <AiIcons.AiOutlineLogout size={30} />
                  <span>Log Out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </IconContext.Provider> }
        <div className='data'>
        <h3>General User Data for {loggedIn.name + ' ' + loggedIn.surname}</h3>
            <hr/>
          <div className='general'>
            <p> City and Address: {loggedIn.city + ' ' +loggedIn.address}</p>
            <p> E - mail: {loggedIn.email}</p>
            <details>
              <summary>More Info</summary>
              <p> Phone: {loggedIn.phone}</p>
              <p> User Since: {loggedIn.date}</p>
            </details>
          </div> 
          <div className='meter'>
            <p>Previous meter: {loggedIn.meter_before}</p>
            <p>Last meter: {loggedIn.meter_new}</p>
            <p>Total Consumption: {Number(loggedIn.meter_new) -  Number(loggedIn.meter_before)}</p>
          </div>
          <div className='total'>
            <p>Last Invoice: {(Number(loggedIn.meter_new) -  Number(loggedIn.meter_before)) * 36} RSD </p>
            <p>Last Payment: {loggedIn.paid + ' ' + 'RSD' + ' ' + loggedIn.lastPayment}</p>
            <p>Balance: {(Number(loggedIn.meter_new) -  Number(loggedIn.meter_before)) * 36 - (loggedIn.paid)}</p>
          </div>
        </div>
      </Profil>
    </div>
  ) : (
    <Redirect to='/login' />
    
  );

};

export default Profile;
