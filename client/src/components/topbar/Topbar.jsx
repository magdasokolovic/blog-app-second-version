import React from 'react'
import './topbar.css'
import {Link} from 'react-router-dom'

export default function Topbar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-github-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                        {/* <Link className="link" to="/">LOGOUT</Link> */}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img className="topImage" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="girl smiling" />
                ) : (
                    <ul className="topList">

                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>

                    </ul>
                )
            }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>


        </div>
    )
}

