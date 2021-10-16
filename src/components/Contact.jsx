import React, { useState } from "react";
import emailjs, { send } from 'emailjs-com';
 import {GoogleMapReact} from 'google-map-react'
import { ContactForm } from "../styledComponents/ContactForm.style";
import { Error } from "../styledComponents/Error.style";

/*
function Map(){
    return <GoogleMap defauldZoom={10} defauldCenter={{lat:45.421532, lng:-75.697189}} />
}

const WrappedMap = withScriptjs(withGoogleMap(Map)) */


const Contact = () => {
    const [inputName, setInputName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState("")
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('gmail', 'template_c2zu9xs',e.target, 'user_Hm3Ql1tCX9e7E2SBAn4d1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    
    const isValid = (inputName, email, subject, message) => {
        inputName.length === 0 &&
        email.length === 0 &&
        subject.length === 0 &&
        message.length === 0
    }
    
    return ( 
        <div className="container">
        <ContactForm>
                <form onSubmit={sendEmail}>
                    <Error>
                    {error}
                    </Error>
                    <div >
                        <label>Your Name:</label>
                        <input type='text' className="form-control" placeholder="Enter Name" name="name" onChange={(e) => { setInputName(e.target.value);}}/>
                    </div>
                    <div >
                    <label>Your E - mail:</label>
                        <input type='email' className="form-control" placeholder="Enter e- mail address" name="email" onChange={(e) => { setEmail(e.target.value);}}  />
                    </div>
                    <div >
                    <label>E - mail Subject:</label>
                        <input type='text' className="form-control" placeholder="Subject" name="subject" onChange={(e) => { setSubject(e.target.value);}} />
                    </div>
                    <div >
                    <label>Your Message:</label>
                        <textarea type='text' className="form-control" cols='30' rows='8' placeholder="Enter message" name="message" onChange={(e) => { setMessage(e.target.value);}} ></textarea>
                    </div>
                    <div>
                        <input type='submit' className="btn" value='Send Message' />
                    </div>
                </form>
                
            </ContactForm>
            </div>
            
        
        
     );
} 
 
export default Contact
