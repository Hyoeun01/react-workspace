import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "사람1",
        comment: "하이"
    },
    { 
        name: "사람2",
        comment: "하이"
    },
    { 
        name: "사람3",
        comment: "하이"
    }
]
function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}
export default CommentList;