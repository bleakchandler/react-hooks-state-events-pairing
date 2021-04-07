import React from "react";

function Comment({ user, comment }) {
    return (
        <div className="comment">
            <h5>{user}</h5>
            <p>{comment}</p>
        </div>

    )
}

export default Comment;