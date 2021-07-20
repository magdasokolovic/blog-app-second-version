import React, { useEffect, useState } from 'react'
import {useLocation, Link} from 'react-router-dom'
import './SinglePost.css'
import axios from 'axios'

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async ()=>{
            const res = await axios.get('/posts/' + path)
            setPost(res.data)
        }
        getPost()
    }, [path])
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                <img src={post.photo} alt="White gear on pink flatlay" className="singlePostImage" />
                )}
               
                <h1 className="singlePostTitle">{post.title}
                    <div className="singlePostEdit">
                        <i class="singlePostIcon far fa-edit"></i>
                        <i class="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Autor: <Link tp={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link></span>
                    <span className="singlePostData">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">{post.desc}</p>
            </div>
        </div>
    )
}
