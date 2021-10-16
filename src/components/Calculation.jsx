import React, { useState } from "react";
import {CalculationSt} from '../styledComponents/CalculationSt.style'
import { Profil } from "../styledComponents/Profil.style";
import { Result } from "../styledComponents/Result.style";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Calculation = ({loggedIn, setUsers}) => {
  const [previous, setPrevious] = useState('')
  const [neww, setNeww] = useState('')
  const [result, setResult] = useState('')

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const logOut = () => {
    setUsers(null);
  };

  
    return   ( 
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
      <CalculationSt className="form" onSubmit={(e)=>{
        e.preventDefault()
        setResult(neww - previous)
      }}>
        <div className="input">
    <input type='text' placeholder="enter previous meter" onChange={(e) => { setPrevious(e.target.value)}}/>
    <input type='text' placeholder="enter new meter" onChange={(e) => { setNeww(e.target.value)}}/>
    
    <input type='submit' className="btn" value='Count'/>
    </div>
      
      <Result>
       <p>New Invoice is: {Number(result) * 36} RSD</p>
      </Result>
      </CalculationSt>
      </Profil>
      
    )
    
     
}
 
export default Calculation;