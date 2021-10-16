/** @format */

import React from "react";
import { Link, Redirect } from "react-router-dom";
import { HomeSt } from "../styledComponents/HomeSt.style";

const Home = ({ loggedIn }) => {
  
  return !loggedIn ? (
    <HomeSt >
      <Link to='/login' className='left'>
        Already Have an Account?
      </Link>

      <Link to='/register' className='right'>
        Not Registered?
      </Link>
    </HomeSt>
    
    ) : (
    <Redirect to='/profile' />
  );
};

export default Home;
