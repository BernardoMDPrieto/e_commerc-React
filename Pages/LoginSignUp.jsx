import React from "react";
import './CSS/LoginSignup.css'

const LoginSignUp = () => {
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h2>Sign Up</h2>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Alreade have an acount? <span>Login Here</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, I agre to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignUp