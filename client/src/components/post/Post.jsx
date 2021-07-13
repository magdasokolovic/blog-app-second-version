import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZyUyMHBvc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="computer" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>

                </div>
                <div className="postTitle">
                    Lorem ipsum dolor sit amet.
                </div>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, necessitatibus vitae saepe maxime iste, excepturi ea est odit blanditiis sint neque eos sapiente quia voluptatum omnis harum, tempore corrupti dolore! lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    )
}
