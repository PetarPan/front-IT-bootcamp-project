import styled from "styled-components"



export const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    height: 4vw;
    width: 100%;
    border: 1px solid black;
    line-height: 4vw;
    background-color: #222831;
    
    
    a{
        font-size: 18px;
        display: flex;
        justify-content: center;
        width: 100%;
        transition: .2s ease-in;
        border-radius: 10px;
        text-decoration: none;
        color: white;
        font-weight: 700;
        color: #EEEEEE;
        
        &:hover{
            background-color: #393E46;
            
        }
    }
    
`