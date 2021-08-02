import './post.css'
import {Link} from 'react-router-dom'

export default function Post({post}) {

    const PF = 'http://localhost:5001/images/'

    return (
        <div className="post">
            {post.photo && (
                <img className="postImg" src={PF + post.photo}alt="blog post" />
            )}
            
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map(category=>(
                        <span className="postCat">{category.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <div className="postTitle">
                        {post.title}
                    </div>
                </Link>
               
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.description}
            </p>
        </div>
    )
}
