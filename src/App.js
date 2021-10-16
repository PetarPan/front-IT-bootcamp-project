/** @format */

import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav } from "./styledComponents/Nav.style";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Consumption from "./components/Consumption";
import ChangePassword from "./components/ChangePassword";
import AdminPage from "./components/AdminPage";
import { getAllUsers } from "./service";
import Calculation from "./components/Calculation";

function App() {
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  return  (
    <Router >
      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>LogIn</Link>
        <Link to='/register'>Register</Link>
        <Link to='/contact'>Contact</Link>
      </Nav>
      <Route exact path='/'>
        <Home loggedIn={user}  setUsers={setUser} />
      </Route>
      <Route exact path='/login'>
        <Login setUsers={setUser} />
      </Route>
      <Route exact path='/register'>
        <Register setUsers={setUsers} />
      </Route>
      <Route exact path='/profile'>
        <Profile loggedIn={user} setUsers={setUser} />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
      <Route exact path='/changepassword'>
        <ChangePassword loggedIn={user} setUsers={setUser}  />
      </Route>
      <Route exact path='/manual'>
        <Consumption />
      </Route>
      <Route exact path='/calculation'>
        <Calculation loggedIn={user} setUsers={setUser} />
      </Route>
      <Route exact path='/adminpage'>
        <AdminPage loggedIn={user} setUsers={setUsers} />
      </Route>
    </Router>
  );
}

export default App;
