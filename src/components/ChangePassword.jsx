import React, { useState } from "react";
import { CalculationSt } from "../styledComponents/CalculationSt.style";


import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { Profil } from "../styledComponents/Profil.style";
import { Error } from "../styledComponents/Error.style";
import { updateNewPassword } from "../service";


const ChangePassword = ({loggedIn ,setUsers}) => {

    const [password, setPassword] = useState([])
    const [newPassword, setNewPassword] = useState([])
    const [confirmNewPassword, setConfirmNewPassword] = useState([])
    const [error, setError] = useState('')




    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
  
    const logOut = () => {
      setUsers(null);
    };                 
    const changePass = (newPassword) => {
        
        if(loggedIn.password === password && newPassword === confirmNewPassword){
           
            updateNewPassword(loggedIn.id, newPassword).then(res=>{
                setNewPassword(prev => [...prev, res.data])
            })
        } else{
            setError('Password incorrect')
        }

    }

    
    return ( 
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
        
        <CalculationSt onSubmit={(e)=>{
            e.preventDefault()
            changePass(newPassword)
            }}>{' '}
        
        <div className="input">
        <Error>
        {error}
        </Error>
            <input type='password' placeholder="enter old password"  onChange={(e) => { setPassword(e.target.value)}} />
            <input type='password' placeholder="enter new password" onChange={(e) => { setNewPassword(e.target.value)}} />
            <input type='password' placeholder="enter reenter password" onChange={(e) => { setConfirmNewPassword(e.target.value)}}  />
            <input type='submit' value='Change Password' />
        </div>
        </CalculationSt>
        </Profil>
     );
}
 
export default ChangePassword;