import React, { useState } from "react";
import './LoginSignup.css'

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

export default function LoginSignup() {

    let [Action, setAction] = useState("Login"); 

    return(
        <div className="container">
            <div className="header">
                <div className="text">{Action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {Action === "Login"? <div></div>: <div className="input" > 
                    <img src={user_icon} alt=""  />
                    <input type="text" placeholder="Name" />
                    
                </div>  }
               

                <div className="input" > 
                    <img src={email_icon} alt=""  />
                    <input type="email" placeholder="Email" />
                </div>

                <div className="input" > 
                    <img src={password_icon} alt=""  />
                    <input type="password" placeholder="Password" />
                </div>
            </div>

            {Action === "Sign-up"?<div></div> :  <div className="forgot-password">forget password? <span>Click here</span></div> }
     
           
            <div className="submit-container">
                <div className={Action === "Sign-up"?"submit grey":"submit" } onClick={() => {setAction("Sign-up")}} >Signup</div>
                <div className={Action === "Login"?"submit grey":"submit" } onClick={() => {setAction("Login")}}>Login</div>
            </div>

        </div>
    )
};