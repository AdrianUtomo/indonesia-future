import React from "react";
import EmailVerificationCSS from "../LoginAndRegister/LoginAndRegister.module.css";
import mail from "../../assets/Mail.png";
import 'font-awesome/css/font-awesome.min.css';
import { useLocation } from "react-router-dom";
import axios from 'axios';

export const EmailVerification = () => {
const location = useLocation();
const email = location.state;
// console.log(email)
return (
    <div className={EmailVerificationCSS.content}>
        <form className={EmailVerificationCSS.form}>
        <div className={EmailVerificationCSS.title}>Email Verification</div>
        <img src={mail} className={EmailVerificationCSS.center}></img>
        <div>Hello there! It’s almost done! We’ve sent an email to your email for verification, please click the link we sent for verify your email.
Thank you</div> 
        <button className={EmailVerificationCSS.button} style={{backgroundColor: '#DB0A2D'}}>
        Resend Email</button>
        </form>
    </div>
  );
};
