import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username"/>
                <label>Email</label>
                <input type="email" className="registerInput" placeholder="Enter email"/>
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter password"/>
                <button className="registerButton">Register</button>
                <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>

            </form>
        </div>
    )
}
