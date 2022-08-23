import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components'
import { Button } from './Button'
import EmailBg from '../images/email.jpg'
import { ErrorMessage } from '@hookform/error-message';
const Email2 = () => {
    const setSubmitted = useState(false);
    const postUrl = 'https://getform.io/f/2f3ec835-4524-4afc-90e9-69736f7f95ac';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        try {
            fetch(postUrl, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },

            });
            setSubmitted(true);

        }
        catch (error) {
            console.log(errors);
        }
        finally {
            alert("You have reserved your spot.");
        }
    };

    return (
        <EmailContainer>
            <EmailContent>
                <h1>Register to golf with us</h1>
                <p>Sign up to reserve a tee-time</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormWrap>
                        <input type="text" placeholder="Full Name" {...register("Full Name", { required: "Name required.", maxLength: 80 })} />
                        <ErrorMessage
                            errors={errors}
                            name="Full Name"
                            render={({ message }) => <span>{message}</span>}
                        />
                        <input type="text" placeholder="Email" {...register("Email", {
                            required: "Email required.",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Valid Email Only"
                            }
                        })} />
                        <ErrorMessage
                            errors={errors}
                            name="Email"
                            render={({ message }) => <span>{message}</span>}
                        />
                        <input type="number" errors={errors} placeholder="Handicap" {...register("Handicap", {
                            required: "Handicap required.",
                            max: {
                                value: 40,
                                message: "Max is 40"
                            },
                            min: {
                                value: 0,
                                message: "Min is 40"
                            }, maxLength: 2
                        })} />
                        <ErrorMessage
                            errors={errors}
                            name="Handicap"
                            render={({ message }) => <span>{message}</span>}
                        />

                        <select defaultValue="" {...register("shirtSize", { required: "Pick Shirt Size" })}>
                            <option disabled={true} value="">Choose Shirt Size</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>

                        <ErrorMessage
                            errors={errors}
                            name="shirtSize"
                            render={({ message }) => <span>{message}</span>}
                        />
                        <Button htmlFor="signup" as="button" type="submit" primary="true" round="true" css={`
                        height:35px;
                        padding: 0;
                        width:100%;
                        max-width:350px;
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

                    </FormWrap>
                </form>
            </EmailContent>
        </EmailContainer>
    );
}
export default Email2
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
    font-size: clamp(1.75rem, 5vw, 3rem);
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
    max-width: 350px;
}
`

const FormWrap = styled.div`
input[type=text], input[type=email] {
    padding: 1rem 1.5rem;
    margin-top: 0.5rem;
    outline: none;
    max-width: 350px;
    width: 100%;
    height: 24px;
    border-radius: 15px;
    border: none;
    margin-right: 1rem;
}
span {
    color: #bf1650;
    font-size:12px;
    font-weight:bold;
  }
  span::before {
    display: inline;
    content: "⚠ ";
  }  
select {
    padding-left: 1.2rem; 
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    max-width: 350px;
    width: 100%;
    height: 32px;
    border-radius: 15px;
    border: none;
    margin-right: 1rem;
    outline: none;
    
}
input[type=number] {
    padding: 1rem 1.5rem;
    margin-top: 0.5rem;
    color: black;
    outline: none;
    max-width: 350px;
    width: 100%;
    height: 24px;
    border-radius: 15px;
    border: none;
    margin-right: 1rem;
}
label { 
font-size: 12px;
font-weight: 700;
width:100%;
}

@media screen and (max-width:768px){
    padding: 0 1rem;
}
`