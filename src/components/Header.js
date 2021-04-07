
import React from "react";


function Header({ title, views, date }) {
    return (
        <header>
            <iframe
                width="919"
                height="525"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameborder="0"
                allowfullscreen
                title="Thinking in React"
            />
            <h1> {title} </h1>
            <small> {views} views | Uploaded {date} </small>
        </header>
    )
}


export default Header;