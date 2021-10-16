/** @format */

import React, {  useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllUsers } from "../service";
import { Error } from "../styledComponents/Error.style";
import { LoginForm } from "../styledComponents/LoginForm.style";
const Login = ({ setUsers }) => {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [error, setError] = useState("");

  const history = useHistory();
  return (
    <LoginForm
      onSubmit={(e) => {
        e.preventDefault();
        getAllUsers().then((res) => {
          let user = res.data.find(
            (el) =>
              (el.name === username || el.email === username) &&
              el.password === password
          );
          if(username === 'admin' && password === 'admin'){
            history.push('/adminpage')
            return
          }
          if (user) {
            setUsers(user);
            history.push("/profile");
          } else {
            setError("Username od E - mail or password are invalid");
          }
          
        });
      }}>
      <Error>
      {error}
      </Error>
      <label>Username / E - mail</label>
      <p></p>
      <input
        type='text'
        placeholder='Enter yout name/email'
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type='password'
        placeholder='Enter yout password'
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />{" "}
      <br />
      <button>LogIn</button>
      <div>
        
       
        <Link to='/register'>Not Registered</Link>
      </div>
    </LoginForm>
  );
};

export default Login;
