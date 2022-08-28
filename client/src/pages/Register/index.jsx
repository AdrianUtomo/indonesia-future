import React from "react";
import RegisterCSS from "../LoginAndRegister/LoginAndRegister.module.css";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';

export const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }
  const location = useLocation();
  const state = location.state;
  const occupation = location.state.name.occupation;

return (
    <div className={RegisterCSS.content}>
        <form className={RegisterCSS.form}>
        <div className={RegisterCSS.title}>Sign up as {occupation}</div>
        <div className={RegisterCSS.fullName}>
          <input type="text" className={RegisterCSS.input} style={{width: '49%'}} placeholder="First name" name="first-name" required/>
          <input type="text" className={RegisterCSS.input} style={{width: '49%'}} placeholder="Last name" name="last-name" required/>
        </div>
        <div>
          <input type="email" className={RegisterCSS.input} placeholder="Email" name="email" required/>
        </div>
        <div className={RegisterCSS.inputPassword}>
          <i className= {passwordType==="password"? "fa fa-eye-slash":"fa fa-eye"} onClick={togglePassword}></i>
          <input type={passwordType} className={RegisterCSS.input} placeholder="Password (6 or more characters)" name="pass" required/>
        </div>
        <div className={RegisterCSS.inputPassword}>
          <i className= {passwordType==="password"? "fa fa-eye-slash":"fa fa-eye"} onClick={togglePassword}></i>
          <input type={passwordType} className={RegisterCSS.input} placeholder="Confirm Password (Re-type password)" name="pass" required/>
        </div>
        <div className={RegisterCSS.agree}>By clicking Agree &amp; Create Account, you agree to IndonesiaTalent <NavLink to={"/term-of-use"} className={RegisterCSS.link}>Term of Use</NavLink>, <NavLink to={"/user-agreement"} className={RegisterCSS.link}>User Agreement</NavLink>, and <NavLink to={"/privacy-policy"} className={RegisterCSS.link}>Privacy Policy</NavLink></div> 
        <div>
        <NavLink to={'/email-verification'} className={RegisterCSS.button}>Create account</NavLink>
        </div>
        <h2 className={RegisterCSS.or}><span>or</span></h2>
        <button className={RegisterCSS.continue}><img src={google} class={RegisterCSS.continueIcon}></img>Continue with Google</button>
        <div>
        </div>
        <button className={RegisterCSS.continue}><img src={facebook} class={RegisterCSS.continueIcon}></img>Continue with Facebook</button>
        <div className={RegisterCSS.signup}>
          Already have an account? <NavLink to={"/login"} className={RegisterCSS.link}>Log in</NavLink>
        </div>
        </form>
    </div>
  );
};
