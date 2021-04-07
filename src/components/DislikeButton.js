import React, { useState } from 'react';

function DislikeButton({dislikes}) {

    const [dislike, setDislike] = useState(dislikes);

    function handleDislike() {
        setDislike(dislike +1)
    }

    return (
        <button onClick={handleDislike}>
            {dislike}👎
        </button>
    )
}

export default DislikeButton;