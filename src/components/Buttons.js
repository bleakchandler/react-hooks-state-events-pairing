import React from "react";
import LikeButton from "./LikeButton"
import DislikeButton from "./DislikeButton"

function Buttons({likes, dislikes}) {
    return (
        <>
            <LikeButton likes = {likes}/>
            <DislikeButton dislikes = {dislikes}/>
        </>
    )
}

export default Buttons;