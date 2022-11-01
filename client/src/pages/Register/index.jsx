import React from "react";
import RegisterCSS from "../LoginAndRegister/LoginAndRegister.module.css";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import axios from 'axios';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';

export const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const occupation = location.state.name.occupation;
  const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  const [passwordType, setPasswordType] = useState("password");
  const [values, setValues] = useState({firstname:"", lastname:"", email:"", password:"",retyped_password:""})
  const [errors, setErrors] = useState({})
  const [errorMessage, setErrorMessage] = useState("")
  const [filled, setFilled] = useState(false);
  const checkFilled =() => {
    if (Object.values(values).every(value => value!="") && !filled) {
      setFilled(true)
    }
    else if (!Object.values(values).every(value => value!="") && filled) {
      setFilled(false)
    }
  };
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }
  const validateAndSubmitForm = (e) => {
    e.preventDefault();
 
    const errors = {};
 
    if (!isEmail(values.email)) {
      errors.email = "Invalid email";
    }

    if (values.password.length<6) {
      errors.password_length = "Password is less than 6 characters"
    }

    if (values.password!=values.retyped_password) {
      errors.retyped_password = "Password does not match"
    }
    setErrors(errors);
 
    if (!Object.keys(errors).length) {
      submit()
    }
    else {
      setErrorMessage(Object.entries(errors).at(0)[1])
    }
  };
  const setFirstName = (e) => {
    setValues((values) => ({ ...values, firstname: e.target.value }));
  };
  const setLastName = (e) => {
    setValues((values) => ({ ...values, lastname: e.target.value }));
  };
  const setEmail = (e) => {
    setValues((values) => ({ ...values, email: e.target.value }));
  };
  const setPassword = (e) => {
    setValues((values) => ({ ...values, password: e.target.value }));
  };
  const setRetypedPassword = (e) => {
    setValues((values) => ({ ...values, retyped_password: e.target.value }));
  };
  const submit = () => {
    const userObject = {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password
    };
    const email = {
      email: values.email,
    }
    axios.post(`http://localhost:8080/api/${occupation}/`, userObject)
        .then((res) => {
          navigate('/email-verification',
          {state:[occupation, email]}
          );
        }).catch((error) => {
            console.log(error)
        });
  }
return (
    <div className={RegisterCSS.content}>
        <form className={RegisterCSS.form} onSubmit={validateAndSubmitForm}>
        <div className={RegisterCSS.title}>Sign up as {occupation}</div>
        <div className={RegisterCSS.fullName}>
          <input type="text" className={RegisterCSS.input} style={{width: '49%'}} placeholder="First name" name="first-name"
          value={values.firstname}
          onChange={setFirstName}
          required/>
          <input type="text" className={RegisterCSS.input} style={{width: '49%'}} placeholder="Last name" name="last-name"
          value={values.lastname}
          onChange={setLastName}
          required/>
        </div>
        <div>
          <input type="text" className={RegisterCSS.input} placeholder="Email" name="email" 
            value={values.email}
            onChange={setEmail}          
          required/>{" "}
        </div>
        <div className={RegisterCSS.inputPassword}>
          <i className= {passwordType==="password"? "fa fa-eye-slash":"fa fa-eye"} onClick={togglePassword}></i>
          <input type={passwordType} className={RegisterCSS.input} placeholder="Password (6 or more characters)" name="pass" 
          value={values.password}
          onChange={setPassword}
          required/>
        </div>
        <div className={RegisterCSS.inputPassword}>
          <i className= {passwordType==="password"? "fa fa-eye-slash":"fa fa-eye"} onClick={togglePassword}></i>
          <input type={passwordType} className={RegisterCSS.input} placeholder="Confirm Password (Re-type password)" name="pass" 
          value={values.retyped_password}
          onChange={setRetypedPassword}
          required/>
        </div>
        <div className={RegisterCSS.agree}>By clicking Agree &amp; Create Account, you agree to IndonesiaTalent <NavLink to={"/term-of-use"} className={RegisterCSS.link}>Term of Use</NavLink>, <NavLink to={"/user-agreement"} className={RegisterCSS.link}>User Agreement</NavLink>, and <NavLink to={"/privacy-policy"} className={RegisterCSS.link}>Privacy Policy</NavLink></div> 
        <div>
          {checkFilled()}
          {filled ? (
            <button className={RegisterCSS.button} style={{backgroundColor:"var(--color-main-red)"}} type="submit">Create Account</button>
          ) :
          (
            <button className={RegisterCSS.button} style={{backgroundColor:"var(--strokes-color)"}} type="submit">Create Account</button>
          )}
        <span
          style={{
            fontWeight: "bold",
            color: "#db0a2d"
          }}
        >
        {
          errorMessage
        }       
        </span>
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
