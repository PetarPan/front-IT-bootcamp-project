import styled from "styled-components";

export const ContactForm = styled.div`
    margin:0 auto ;
    padding-top: 9vw;
    width:80%;
    form{
        background: #00ADB5;
        text-align: center;
    }
    label{
        color: #eeeeee;
        font-size: 1.2rem;
    }
    .form-control{
        opacity: .9;
        width: 50%;
        margin: 0 auto;
    }
    form div {
        padding: 5px;
    }
    .btn{
        color: #eeeeee;
        background: #393e46;
        transition: .3s;
    }
    .btn:hover{
        background: #222831
    }
`