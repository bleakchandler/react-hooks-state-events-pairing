import React, { useState } from 'react';


function LikeButton({likes}) {

    const [like, setLike] = useState(likes);

    function handleLike() {
        setLike(like +1)
    }

    return (
        <button onClick={handleLike}>
            {like}👍
        </button>
    )
}


export default LikeButton;