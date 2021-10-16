/** @format */

import styled from "styled-components";

export const LoginForm = styled.form`
  border: 1px solid black;
  border-radius: 25px;
  background: #00adb5;
  color: #eeeeee;
  font-weight: 650;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vh;
  height: 75vh;
  margin: 0 auto;
  margin-top: 10vh;
  padding: 20px;
label{
    padding: 1.5vh 0;
}
  label:first-child {
    padding-top: 15vh;
  }
  input {
    width: 35vh;
    height: 6vh;
  }
  button {
    width: 17vh;
    height: 5vh;
    background: #393E46;
    color: #eeeeee;
    border: none;
    transition: .5s ease-in;
  }
  button:hover{
    background: #222831;
    border-radius: 10px;
  }
  a{
      color: #eeeeee;
  }
  div {
    padding-top: 5vh;
    text-align: center;
    align-content: center;
  }
`;
