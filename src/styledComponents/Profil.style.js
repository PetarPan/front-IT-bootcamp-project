/** @format */

import styled from "styled-components";

export const Profil = styled.div`

.main{
 
}

  .navbar {
    background: #222831;
    height: 91.5vh;
    width: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  #toggle {
    position: relative;
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background: #222831;
    cursor: pointer;
    transform: .2s;
}

#toggle.active {
    background: #222831;
}

#toggle::before {
    content: '';
    position: absolute;
    width: 28px;
    height: 2px;
    background: #fff;
    transition: .2s;
    transform: translateY(-10px);
    box-shadow: 0 10px 0 #fff;
    z-index: 1000;
}

#toggle.active::before {
    transform: translateY(0) rotate(45deg);
    box-shadow: 0 0 0 #fff;
    z-index: 1000;
}

#toggle::after {
    content: '';
    position: absolute;
    width: 28px;
    height: 2px;
    background: #fff;
    transition: .2s;
    transform: translateY(10px);
    z-index: 1000;
}

#toggle.active::after {
    transform: translateY(0) rotate(-45deg);
    z-index: 1000;
}
  .menu-bars {
    position: absolute;
    left: 1.5rem;
    top: 0;
    font-size: 2rem;
    background: #222831;
    
  }
  .nav-menu {
    background: #222831;
    width: 300px;
    height: 100vh;
    justify-content: center;
    position: fixed;
    top: 4vw;
    left: -100%;
    transition: 850ms;
   
    
  }
  .nav-menu span{
    display: none;
  }
  .nav-menu.active span{
    display: inline;
  }
  .nav-menu.active {
    transition: 350ms;
    position: fixed;
    top: 4vw;
    left: 0;
  }
  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0 8px 16px;
    list-style: none;
    height: 60px;
    margin-left: -1.5rem;
  }
  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    height: 100%;
    display: block;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }
  .nav-text a:hover {
    background: #1a83ff;
  }
  .nav-menu-items {
    width: 100%;
  }
  .navbar-toggle {
    background: #222831;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  span {
    margin-left: 3rem;
  }
  .data{
    position: fixed;
    bottom: 2vw;
    right: 20%;
    width: 45vw;
    height: 40vw;
    background: #00ADB5;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

  }
 h3{
    color: #eeeeee;
    margin-left: 30%;
    cursor: pointer;
    padding-top: 0.5vw;
  }
  .general, .meter{
    width: 100%;
    height: 40%;
    border-bottom: 1px solid black;
    transition: .4s;
  }
   .meter{
    width: 100%;
    height: 35%;
    border-bottom: 1px solid black;
    transition: .4s;
    margin-top: 2vw;
  }
  
  .data details {
    color: #eeeeee;
    
  }
  .data details summary {
    padding-left: 5vw;
  }
  .data details  p {
    padding-left: -5vw;
  }
  .total{
    transition: .4s;
    
  }
  .general:hover{
    background: #393E46;
    opacity: .8;
  }
  .meter:hover{
    background: #393E46;
    opacity: .8;
  }
  .total:hover{
    background: #393E46;
    opacity: .8;
  }
  .data p{
    color: #eeeeee;
    font-size: 1.2rem;
    font-weight: 600;
    padding-left: 5vw;
  }
  
`


