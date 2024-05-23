import React from "react";

// mapping : 배열에 들어있는 각 변수에 어떤 처리를 한 뒤에 리턴하는 것
function NumberList(props){
    const numbers = [1,2,3,4,5];
    const listItems = numbers.map((number)=>
        // key in React :  리스트에서 아이템을 구분하기 위한 문자열. 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됨
    <li key={number.toString()}>{number}</li>
    );

    return <ul>{listItems}</ul>;

    // ReactDOM.render(
    //     <ul>{listItems}</ul>,
    //     document.getElementById('root')
    // );
}
export default NumberList;