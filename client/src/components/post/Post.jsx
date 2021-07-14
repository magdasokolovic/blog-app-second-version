import './post.css'

export default function Post({post}) {
    console.log(post)
    return (
        <div className="post">
            {post.photo && (
                <img className="postImg" src={post.photo}alt="blog post" />
            )}
            
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map(category=>(
                        <span className="postCat">{category.name}</span>
                    ))}
                </div>
                <div className="postTitle">
                    {post.title}
                </div>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.desc}
            </p>
        </div>
    )
}
