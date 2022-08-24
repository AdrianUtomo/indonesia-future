import React from "react";
import LoginCSS from "./Login.module.css";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div className={LoginCSS.content}>
        <form className={LoginCSS.loginForm}>
        <div className={LoginCSS.loginFormTitle}>Log in</div>
        <div>
          <input type="text" className={LoginCSS.loginFormInput} placeholder="Username or Email" name="uname" required/>
        </div>
        <div>
          <input type="password" className={LoginCSS.loginFormInput} placeholder="Password" name="pass" required/>
        </div>
        <div className={LoginCSS.loginFormForgot}>
          Forgot password?
        </div>
        <div>
        <button className={LoginCSS.loginFormButton}>Log in</button>
        </div>
        <h2 className={LoginCSS.loginFormOr}><span>or</span></h2>
        <button className={LoginCSS.loginFormContinue}><img src={google} class={LoginCSS.continueIcon}></img>Continue with Google</button>
        <div>
        </div>
        <button className={LoginCSS.loginFormContinue}><img src={facebook} class={LoginCSS.continueIcon}></img>Continue with Facebook</button>
        <div className={LoginCSS.signUp}>
          Doesn't have an account? <NavLink to={"/sign-up"} className={LoginCSS.link}>Sign up</NavLink>
        </div>
        </form>
    </div>
  );
};
