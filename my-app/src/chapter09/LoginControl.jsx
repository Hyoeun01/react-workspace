import React, { useState } from "react";
import Greeting from "./Greeting";

// 엘리먼트 변수 ; 렌더링해야 될 컴포넌트를 변수처럼 다루고 싶을 때 사용

function LoginButton(props){
    return(
        <button onClick={props.onClick}>로그인</button>
    );
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>로그아웃</button>
    );
}

function LoginControl(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick=()=>{
        setIsLoggedIn(true);
    }
    const handleLogoutClick=()=>{
        setIsLoggedIn(false);
    }
    
    let button;
    if(isLoggedIn){
        button=<LogoutButton onClick={handleLogoutClick} />;
    } else {
        button=<LoginButton onClick={handleLoginClick} />;
    }
    
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    )
}

export default LoginControl;