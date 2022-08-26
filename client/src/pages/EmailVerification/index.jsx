import React from "react";
import EmailVerificationCSS from "../LoginAndRegister/LoginAndRegister.module.css";
import mail from "../../assets/Mail.png";
import 'font-awesome/css/font-awesome.min.css';

export const EmailVerificationCSS = () => {
return (
    <div className={EmailVerificationCSS.content}>
        <form className={EmailVerificationCSS.form}>
        <div className={EmailVerificationCSS.title}>Email Verification</div>
        <img src={mail}></img>
        <div>Hello there! It’s almost done! We’ve sent an email to your email for verification, please click the link we sent for verify your email.
Thank you</div> 
        <button className={EmailVerificationCSS.redButton}>Resend Email</button>
        </form>
    </div>
  );
};
