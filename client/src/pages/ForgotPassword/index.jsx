import React from "react";
import ForgotPasswordCSS from "../LoginAndRegister/LoginAndRegister.module.css";
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from "react-router-dom";

export const ForgotPassword = () => {
return (
    <div className={ForgotPasswordCSS.content}>
        <form className={ForgotPasswordCSS.form}>
        <div className={ForgotPasswordCSS.title} style={{textAlign:'left'}}>Forgot your password?</div>
        <div style={{textAlign:'left'}}>Reset your password with enter your username or email and select Send Email</div>
        <div>
          <input type="text" className={ForgotPasswordCSS.input} style={{marginTop:"30px"}} placeholder="Username or Email" name="uname" required/>
        </div>
        <div>
        <button className={ForgotPasswordCSS.button}>Send Email</button>
        </div>
        <div>
        <NavLink to={"/login"} className={ForgotPasswordCSS.button} style={{background:"white", color:"black", fontWeight:"700"}}>Cancel</NavLink>
        </div>
        </form>
    </div>
  );
};
