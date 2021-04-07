import React, { useState } from "react"
import CommentList from "./CommentList"


function HideButton({ comments }) {
    const [isDisplayed, setDisplay] = useState(true)

    function hide() {
        setDisplay(!isDisplayed)
    }

    return (
        <div>
            <button onClick={hide}>
                Hide
        </button>
            {isDisplayed && <CommentList comments={comments} />}
        </div>
    )
}

export default HideButton