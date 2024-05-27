import React from "react";
import FancyBorder from "./FancyBorder";

function Dialog(props){
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
        </FancyBorder>
    )

}
function WelcomeDialog(props){
    return (
        <div>
        <Dialog title="어서오세요" message="안반갑지롱"/>        
        <Dialog title="어서올거임?" message="나가렴"/> 
        </div>
    );
}

export default WelcomeDialog;