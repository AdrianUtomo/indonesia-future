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
          <input type="text" className={RegisterCSS.inputHalf} placeholder="First name" name="first-name" required/>
          <input type="text" className={RegisterCSS.inputHalf} placeholder="Last name" name="last-name" required/>
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
        <div>By clicking Agree &amp; Create Account, you agree to IndonesiaTalent Term of Use, User Agreement, and Privacy Policy</div> 
        <div>
        <button className={RegisterCSS.button}>Create account</button>
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
