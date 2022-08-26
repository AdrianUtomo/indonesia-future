import React from "react";
import JoinCSS from "../LoginAndRegister/LoginAndRegister.module.css";
import { NavLink } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import client from "../../assets/resume.png";
import freelancer from "../../assets/Find Jobs.png";
import { useState } from "react";

export const Join = () => {
const [clientBorderColor, setClientBorderColor] = useState("transparent");
const [freelancerBorderColor, setFreelancerBorderColor] = useState("transparent");
const [buttonText, setButtonText] = useState("Create an account");
const [occupation, setOccupation] = useState("")
const chooseClient =()=>{
  setButtonText('Join as client')
  setClientBorderColor('#DB0A2D')
  setFreelancerBorderColor('transparent')
  setOccupation("Client")
}
const chooseFreelancer =()=>{
  setButtonText('Join as freelancer')
  setFreelancerBorderColor('#DB0A2D')
  setClientBorderColor('transparent')
  setOccupation("Freelancer")
}
return (
    <div className={JoinCSS.content}>
        <form className={JoinCSS.form}>
        <div className={JoinCSS.title}>Join as a Client or Freelancer</div>
        <div className={JoinCSS.pickOccupation}>
            <div className={JoinCSS.box} style={{borderColor:clientBorderColor}}>
            <input type="radio" id="client" className={JoinCSS.box} name="occupation" value="client" onClick={() => chooseClient()}></input>
            <label htmlFor="client">
            <div></div>
            <img src={client}></img>
            <div>I want to hire a talent for project</div>    
            </label> 
            </div> 
            <div className={JoinCSS.box} style={{borderColor:freelancerBorderColor}}>
            <input type="radio" id="freelancer" className={JoinCSS.box} name="occupation" value="freelancer" onClick={() => chooseFreelancer()}></input>
            <label htmlFor="freelancer"> 
            <div></div>  
            <img src={freelancer}></img>
            <div>I want to work on a project</div>
            </label>
            </div> 
        </div>
        <NavLink to={"/register"} state={{name:{occupation}}} style={{textDecoration:'none'}} className={JoinCSS.redButton}>{buttonText}</NavLink>
        <div className={JoinCSS.signup}>
          Already have an account? <NavLink to={"/login"} className={JoinCSS.link}>Log in</NavLink>
        </div>
        </form>
    </div>
  );
};
