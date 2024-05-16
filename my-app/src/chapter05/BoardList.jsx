import React from "react";
import Board from "./Board";

const boards = [
    {
        title: "타이틀1",
        name: "사람1",
        comment: "하이"
    },
    { 
        title: "타이틀3",
        name: "사람2",
        comment: "하이"
    },
    { 
        title: "타이틀3",
        name: "사람3",
        comment: "하이"
    }
]
function BoardList(props){
    return (
        <div>
            {boards.map((board) => {
                return (
                    <Board title={board.title} name={board.name} comment={board.comment} time={board.time} />
                );
            })}
        </div>
    );
}
export default BoardList;