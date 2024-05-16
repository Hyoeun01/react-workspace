import React from "react";

function FuncWelcome(props){
    return (<h1>하이,{props.name}</h1>);
}

// class ClassWelcome extends React.Component{
//     render(){
//         return <h1>안녕,{this.props.name}</h1>;
//     }
// }

function PropsEx(props){
    <div>
    <FuncWelcome name = "소플" />
    </div>
}
export default PropsEx;