import React from "react";

function UserGreeting(props){
    return <h1>다시 오셨군용</h1>
}

function GuestGreeting(props){
    return <h1> 회원가입을 해주세용</h1>
}

// 조건부 렌더링 알아보기 > 조건에 따라서 렌더링이 달라지는 것
// 조건문의 결과는 true or false
function Greeting(props){ // props를 전달 안하면 isLoggedIn 가 falsy이므로 GuestGreeting이 호출된다
    // Truthy : true는 아니지만 true로 여겨지는 값 / Falsy : false는 아니지만 false로 여겨지는 값
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export default Greeting;