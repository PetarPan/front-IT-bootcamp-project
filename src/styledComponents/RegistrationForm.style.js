/** @format */

import styled from "styled-components";

export const RegistrationForm = styled.form`
  border: 1px solid black;
  background: #00adb5;
  border-radius: 25px;
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
  label {
    padding: 1.5vh 0;
  }
  label:first-child {
    padding-top: 5vh;
  }
  input {
    width: 35vh;
    height: 6vh;
  }
  button {
    width: 17vh;
    height: 5vh;
    background: #393e46;
    color: #eeeeee;
    border: none;
    transition: ease-in.5s;
  }
  button:hover{
    background: #222831;
    border-radius: 10px;
  }
  a {
    color: #eeeeee;
  }
  div {
    padding-top: 5vh;
    text-align: center;
    align-content: center;
  }
`;
