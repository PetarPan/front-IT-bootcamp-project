import styled from "styled-components";

export const HomeSt = styled.div`
    margin: 15vh auto;
    width: 110vh;
    height: 60vh;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    position: relative;
  

    .left {
        width: 40%;
        position: absolute;
        left: 0;
        height: 90%;
        background-color: #00ADB5;
        border-radius: 100px;
        margin-right: 70px;
        transition: .4s ease-in;
        color: whitesmoke;
        font-size: 2vw;
        text-decoration: none;
        padding-top: 9vw;
        padding-left: 3.5vw;
    }
   
    .left:hover {
        box-shadow: 10px 5px #393E46;
    }
    .right {
        position: absolute;
        right: 0;
        width: 40%;
        height: 90%;
        background-color: #00ADB5;
        border-radius: 20px;
        border-radius: 100px;
        margin-left: 70px;
        transition: .4s ease-in;
        font-size: 2vw;
        color: whitesmoke;
        text-decoration: none;
        padding-top: 10vw;
        padding-left: 3.5vw;
    }
    
    .right:hover{
        box-shadow: 10px 5px #393E46;
    }



    .navbar {
    background: #222831;
    height: 95vh;
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
    
` 