import React from "react";
import Comment from "./Comment";

function CommentList({ comments }) {
    const commentArray = comments.map((comment) => (
        <Comment
            key={comment.id}
            user={comment.user}
            comment={comment.comment}
        />
    ))

     return (
        <ul>
            {commentArray}
        </ul>
    )
}

export default CommentList;