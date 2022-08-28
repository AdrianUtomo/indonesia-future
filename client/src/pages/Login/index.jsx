import React from "react";
import LoginCSS from "../LoginAndRegister/LoginAndRegister.module.css";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';

export const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }

return (
    <div className={LoginCSS.content}>
        <form className={LoginCSS.form}>
        <div className={LoginCSS.title}>Log in</div>
        <div>
          <input type="text" className={LoginCSS.input} placeholder="Username or Email" name="uname" required/>
        </div>
        <div className={LoginCSS.inputPassword}>
          <i className= {passwordType==="password"? "fa fa-eye-slash":"fa fa-eye"} onClick={togglePassword}></i>
          <input type={passwordType} className={LoginCSS.input} placeholder="Password" name="pass" required/>
        </div>
        <NavLink to={"/forgot-password"} className={LoginCSS.forgot} style={{textDecoration: "none"}}>Forgot password?</NavLink>
        <div>
        <button className={LoginCSS.button}>Log in</button>
        </div>
        <h2 className={LoginCSS.or}><span>or</span></h2>
        <button className={LoginCSS.continue}><img src={google} class={LoginCSS.continueIcon}></img>Continue with Google</button>
        <div>
        </div>
        <button className={LoginCSS.continue}><img src={facebook} class={LoginCSS.continueIcon}></img>Continue with Facebook</button>
        <div className={LoginCSS.signup}>
          Don't have an account? <NavLink to={"/sign-up"} className={LoginCSS.link}>Sign up</NavLink>
        </div>
        </form>
    </div>
  );
};
