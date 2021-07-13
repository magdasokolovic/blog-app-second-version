import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./Settings.css"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">DeleteYour Account</span>
                </div>
                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <div className="settingsPP">
                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Woman Wearing Black Spaghetti Strap Top" />
                            <label htmlFor="fileInput">
                                <i className="settingsPPIcon far fa-user-circle"></i>
                            </label>
                            <input style={{display: "none"}} type="file" id="fileInput"/>
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder="Magda"/>
                        <label>Email</label>
                        <input type="email" placeholder="magda@gmail.com"/>
                        <label>Password</label>
                        <input type="password" />
                        <button className="settingsSubmit">Update</button>
                    </form>

                
            </div>
            <Sidebar/>
        </div>
    )
}
