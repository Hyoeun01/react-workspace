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
    
    /*
    인라인(inline) 조건

    - 인라인 : 코드를 별도 분리된 곳에 작성하지 않고 필요한 곳 안에 직접 넣기
    - 인라인 조건 : 조건문을 코드안에 집어넣는 것
    */
    // 인라인 if-else 보기
    let button;
    {button = isLoggedIn
        ? <LogoutButton onClick={handleLogoutClick} />
        : <LoginButton onClick={handleLoginClick} />
    }
    // if(isLoggedIn){
    //     button=<LogoutButton onClick={handleLogoutClick} />;
    // } else {
    //     button=<LoginButton onClick={handleLoginClick} />;
    // }
    
    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    )
}

export default LoginControl;