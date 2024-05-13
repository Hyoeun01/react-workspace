import React from "react";
import Student from "./Student";

function StudentList(props){
    return(
        <div>
            <Student sno={123} name="신효은1" major="컴퓨터공학" />
            <Student sno={456} name="신효은2" major="생명공학" />
            <Student sno={789} name="신효은3" major="응용수학" />
        </div>
    );
}

export default StudentList;