import React from 'react'
import './SinglePost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/2255441/pexels-photo-2255441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="White gear on pink flatlay" className="singlePostImage" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i class="singlePostIcon far fa-edit"></i>
                        <i class="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Autor: <b>Magda</b></span>
                    <span className="singlePostData">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem nobis illo sint rerum ab? Quae a nihil neque dolorum doloremque, at quia repellendus ut corporis est aperiam perspiciatis libero. LoremLaborum dolor esse occaecat dolor nostrud ut. Labore exercitation irure enim aliqua consequat qui sint et mollit nostrud id commodo amet. Elit laborum veniam dolore anim magna quis amet laborum ipsum velit.Reprehenderit pariatur enim sunt elit pariatur aute sunt. Consequat irure duis officia est veniam cillum. Ullamco eiusmod reprehenderit ipsum voluptate sit minim sunt sunt. Occaecat deserunt officia cupidatat sit consectetur irure deserunt dolore tempor est proident.</p>
            </div>
        </div>
    )
}
