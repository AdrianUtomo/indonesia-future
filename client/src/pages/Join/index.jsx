import React from "react";
import JoinCSS from "../LoginAndRegister/LoginAndRegister.module.css";
import { NavLink } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import clientRed from "../../assets/occupation/resume red.png";
import freelancerRed from "../../assets/occupation/Find Jobs red.png";
import clientGrey from "../../assets/occupation/resume grey.png";
import freelancerGrey from "../../assets/occupation/Find Jobs grey.png";
import { useState } from "react";

export const Join = () => {
const [clientBorderColor, setClientBorderColor] = useState("transparent")
const [freelancerBorderColor, setFreelancerBorderColor] = useState("transparent")
const [buttonColor, setButtonColor] = useState("#D7D7D7")
const [clientPic, setClientPic] = useState(clientGrey)
const [freelancerPic, setFreelancerPic] = useState(freelancerGrey)
const [buttonText, setButtonText] = useState("Create an account")
const [occupation, setOccupation] = useState("")
const chooseClient =()=>{
  setButtonText('Join as Client')
  setClientBorderColor('#DB0A2D')
  setFreelancerBorderColor('transparent')
  setOccupation("Client")
  setButtonColor('#DB0A2D')
  setClientPic(clientRed)
  setFreelancerPic(freelancerGrey)
}
const chooseFreelancer =()=>{
  setButtonText('Join as Freelancer')
  setFreelancerBorderColor('#DB0A2D')
  setClientBorderColor('transparent')
  setOccupation("Freelancer")
  setButtonColor('#DB0A2D')
  setClientPic(clientGrey)
  setFreelancerPic(freelancerRed)
}
return (
    <div className={JoinCSS.content}>
        <form className={JoinCSS.form}>
        <div className={JoinCSS.title}>Join as a Client or Freelancer</div>
        <div className={JoinCSS.pickOccupation}>
            <div className={JoinCSS.box} style={{borderColor:clientBorderColor, width:"110%"}}>
            <input type="radio" id="client" name="occupation" value="client" onClick={() => chooseClient()}></input>
            <label htmlFor="client">
            <div></div>
            <img src={clientPic} className={JoinCSS.pic}></img>
            I want to hire a talent for project   
            </label> 
            </div> 
            <div className={JoinCSS.box} style={{borderColor:freelancerBorderColor, width:"110%"}}>
            <input type="radio" id="freelancer" name="occupation" value="freelancer" onClick={() => chooseFreelancer()}></input>
            <label htmlFor="freelancer"> 
            <div></div>  
            <img src={freelancerPic} className={JoinCSS.pic}></img>
            I want to work on a project
            </label>
            </div> 
        </div>
        <div></div>
        <div></div>
        <NavLink to={"/register"} state={{name:{occupation}}} style={{textDecoration:'none', backgroundColor: buttonColor, width:"fit-content", display:"inline-block"}} className={JoinCSS.button}>{buttonText}</NavLink>
        <div className={JoinCSS.signup}>
          Already have an account? <NavLink to={"/login"} className={JoinCSS.link}>Log in</NavLink>
        </div>
        </form>
    </div>
  );
};
