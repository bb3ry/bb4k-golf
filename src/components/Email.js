import * as React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import EmailBg from '../images/email.jpg'

const Email = () => {
    return (
        <EmailContainer>
            <EmailContent>
                <h1>Register to golf with us</h1>
                <p>Sign up to reserve a tee-time</p>
                                    <FormWrap>
                                    <form id="signup" enctype="multipart/form-data" action="https://getform.io/f/2f3ec835-4524-4afc-90e9-69736f7f95ac" method="POST">
                        <label htmlFor="name">
                            <input required type="text" pattern="[a-zA-Z ]*" name="name" placeholder="Your Full Name" id="name" />
                        </label>
                        <br />
                        <label htmlFor="email">
                            <input required type="email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" name="email" placeholder="Enter your email" id="email" />
                        </label>
                        <br />
                        <label htmlFor="handicap">
                            <input type="number" id="handicap" placeholder="Choose your handicap" name="handicap"
                                min="0" max="30" pattern="[0-9]+"></input></label>
                        <br />
                        <label htmlFor="shirt">
                            Shirt Size:</label>
                        <label htmlFor="S">
                            <input type="radio" name="shirt" value="S" id="S" />
                            : S</label>
                        <label htmlFor="M">
                            <input type="radio" name="shirt" value="M" id="M" />
                            : M</label>
                        <label htmlFor="L">
                            <input type="radio" name="shirt" value="L" id="L" />
                            : L</label>
                        <label htmlFor="XL">
                            <input type="radio" name="shirt" value="XL" id="XL" />
                            : XL</label>



                        <Button htmlFor="signup" as="button" type="submit" primary="true" round="true" css={`
                        height:35px;
                        margin-top: 1rem;
                        margin-left: 1rem;
                        @media screen and (max-width: 768px){
                            margin-top: 0.3rem;
                            width:100%;
                            max-width:350px;
                            margin-left: 0;
                        }
                        @media screen and (max-width: 400px){
                            margin-top: 0.3rem;
                            margin-left: 0;
                        }
                        `}>Sign Up</Button>
                    
                </form></FormWrap>
            </EmailContent>
        </EmailContainer>
    )

}

export default Email

const EmailContainer = styled.div`
background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.1) 100%), url(${EmailBg}) no-repeat center;
background-size: cover;
height: 470px;
width: 100%;
padding: 5rem calc((100vw - 1300px) / 2);
color: #fff;
display:flex;
justify-content: center;
align-items: center;
`

const EmailContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h1 {
    text-align:center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding-top: 1rem;
}

p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0;
    margin-bottom: 2rem;
}

form {
    z-index: 10;
}
`

const FormWrap = styled.div`
text-align: center;
width: 100%;
input[type=text], input[type=email] {
    padding: 1rem 1.5rem;
    margin-top: 0.5rem;
    outline: none;
    width: 100%;
    max-width: 350px;
    height: 24px;
    border-radius: 15px;
    border: none;
    margin-right: 1rem;
}
input[type=radio] {

    margin-top: 0.5rem;
    outline: none;
    margin-left: 0.5rem;
    margin-right: 0.2rem;
    
}
input[type=number] {
    padding: 1rem 1.5rem;
    margin-top: 0.5rem;
    color: black;
    outline: none;
    width: 100%;
    max-width: 350px;
    height: 24px;
    border-radius: 15px;
    border: none;
    margin-right: 1rem;
}
label { 
    font-size: 12px;
    font-weight: 700;
margin: 0 auto; }

@media screen and (max-width:768px){
    display:flex;
    flex-direction:column;
    padding: 0 1rem;
}
`

