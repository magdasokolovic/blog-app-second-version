import React from 'react'
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.unsplash.com/photo-1575877317669-d037ec99ecf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFib3V0JTIwbWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="a woman smiling" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, architecto soluta labore laboriosam hic minus suscipit voluptates.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        Life
                    </li>
                    <li className="sidebarListItem">
                        Music
                    </li><li className="sidebarListItem">
                        Style
                    </li><li className="sidebarListItem">
                        Sport
                    </li>
                    <li className="sidebarListItem">
                        Tech
                    </li>
                    <li className="sidebarListItem">
                        Cinema
                    </li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-github-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>


            </div>

        </div>
    )
}
