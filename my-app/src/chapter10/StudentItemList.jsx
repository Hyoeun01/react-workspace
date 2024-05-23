import React from "react";

const students = [
    {//id:1,
        name:"학생1"},
    {//id:2,
        name:"학생2"},
    {//id:3,
        name:"학생3"}
];

function StudentItemList(props){
   return(
    <ul>
        {students.map((student,index)=>{
            // return <li key={student.id}>{student.name}</li> ;
            return <li key={index}>{student.name}</li> ;
        })}
    </ul>
   );
}

export default StudentItemList;