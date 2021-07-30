import React, {useState, useEffect} from 'react'
import './sidebar.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () =>
        {
            const res = await axios.get('/categories')
            console.log(res)
            setCats(res.data)
        }
        getCats()
    }, [])
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
                    {cats.map(c=>(
                        <Link to={`?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">
                            {c.name}</li>
                        </Link>
                    ))}
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
