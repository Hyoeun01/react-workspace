import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="처음만난 파이썬" numOfPage={300} />
            <Book name="처음만난 스프링" numOfPage={320} />
            <Book name="처음만난 리액트" numOfPage={310} />
        </div>
    );
}

export default Library;