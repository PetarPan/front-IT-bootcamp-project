import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllUsers, postUser } from "../service";
import { Error } from "../styledComponents/Error.style";
import { RegistrationForm } from "../styledComponents/RegistrationForm.style";

const Register = ({setUsers}) => {
    const [id] = useState(Math.random())
    const [name, setName] = useState([])
    const [surname, setSurname] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [error, setError] = useState('')
    
    const history = useHistory()
    
    const validPassword = (password) => {
        password.length >= 8
        && password.split('').some(char => (char >= 'A' && char <= 'Z') 
        || (char >= 'a' && char <= 'z'))
        && password.some(char => !isNaN(Number(char)))
    }
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    return ( 
        <RegistrationForm onSubmit={(e)=> {
            e.preventDefault()
            if(name.length < 4){
                setError('Username must have at least 4 charachters')
                return
            }
            if(surname.length < 4){
                setError('Username must have at least 4 charachters')
                return
            }
            if(!validateEmail(email)){
                setError('Incorrect E - mail')
            }
           
            getAllUsers().then(res=>{
                
                if(!res.data.some(user =>  user.name === name || user.email === email)){
                    
                    postUser(id, name, surname, password, email).then(res=>{
                        let newUser = res.data
                        setUsers(newUser)
                        history.push('/login')
                    }) 
                }else {
                       setError('Username or E - mail allready exists')
                }
            })
            if(!validPassword(password)){
                setError('Incorrect type of password')
                return
            }
        }}>
            <Error>
            {error}
            </Error>
        <label>Name</label> 
        <input type='text' placeholder="Enter yout name" onChange={(e) => { setName(e.target.value)}}/> 
        <label>Surname</label> 
        <input type='text' placeholder="Enter yout surname" onChange={(e) => { setSurname(e.target.value)}} /> 
        <label>E - mail</label> 
        <input type='email' placeholder="Enter yout email" onChange={(e) => { setEmail(e.target.value)}} /> 
        <label>Password</label>
        <input type='password' placeholder="Enter yout password" onChange={(e) => { setPassword(e.target.value)}}/> <br/>
        <button>Register</button>
        <div>

        <Link to='/login'>Have Account?</Link> <br/>
       
        </div>
    </RegistrationForm>
     );
}
 
export default Register;
