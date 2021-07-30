import React, { useContext, useEffect, useState } from 'react'
import {useLocation, Link} from 'react-router-dom'
import './SinglePost.css'
import axios from 'axios'
import { Context } from '../../context/Context'

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [post, setPost] = useState({})
    const PF = 'http://localhost:5001/images/'
    const {user} = useContext(Context)
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
        const getPost = async ()=>{
            const res = await axios.get('/posts/' + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`,  {data: {username: user.username}
        })
            window.location.replace('/post')

        }
        catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`,  {
            username: user.username, 
            title, 
            desc}
        )
        setUpdateMode(false)
    }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                <img src={PF + post.photo} alt="White gear on pink flatlay" className="singlePostImage" />
                )}
                {updateMode 
                ? 
                    <input className="singlePostTitleInput"
                    autoFocus type="text" value={title}
                    onChange={(e)=>setTitle(e.target.value)}/>
                : 
                (
                    <h1 className="singlePostTitle">{title}
                        {post.username === user?.username && (
                            <div className="singlePostEdit">
                                <i class="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                                <i class="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                        )}
                </h1>
                )
            }
                
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Autor: <Link tp={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link></span>
                    <span className="singlePostData">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode 
                ? 
                    <textarea className="singlePostDescInput" value={desc} 
                    onChange={(e)=>setDesc(e.target.value)}></textarea>
                :
                <p className="singlePostDesc" value={desc}>{desc}</p>
            }
            {updateMode && (
                <button className="singlePostButton"
                onClick={handleUpdate}>Update</button>
            )}
            
               
            </div>
        </div>
    )
}
