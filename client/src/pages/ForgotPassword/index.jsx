import React from "react";
import ForgotPasswordCSS from "../LoginAndRegister/LoginAndRegister.module.css";
import 'font-awesome/css/font-awesome.min.css';

export const ForgotPassword = () => {
return (
    <div className={ForgotPasswordCSS.content}>
        <form className={ForgotPasswordCSS.form}>
        <div className={ForgotPasswordCSS.title} style={{textAlign:'left'}}>Forgot your password?</div>
        <div>Reset your password with enter your username or email and select Send Email</div>
        <div>
          <input type="text" className={ForgotPasswordCSS.input} placeholder="Username or Email" name="uname" required/>
        </div>
        <div>
        <button className={ForgotPasswordCSS.button}>Send Email</button>
        </div>
        <div>
        <button className={ForgotPasswordCSS.whiteButton}>Cancel</button>
        </div>
        </form>
    </div>
  );
};
