import React from "react";

function Welcome(props) {
    return (
        <h1>하이,{props.name}</h1>
    );
}
function Board(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <h3>{props.text}</h3>
        </div>
    );
}

function PropsEx(props) {
    return (
        <div>
            <div>
                <Welcome name="소플" />
                <Welcome name="소플" />
                <Welcome name="소플" />
                <Welcome name="소플" />
            </div>
            <div>
                <Board title="title1" author="author1" text="text1" />
                <Board title="title2" author="author2" text="text2" />
            </div>
        </div>
    );
}

// class ClassWelcome extends React.Component{
//     render(){
//         return <h1>안녕,{this.props.name}</h1>;
//     }
// }

export default PropsEx;