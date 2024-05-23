import React from "react";

// mapping : 배열에 들어있는 각 변수에 어떤 처리를 한 뒤에 리턴하는 것
function NumberList(props){
    const numbers = [1,2,3,4,5];
    const listItems = numbers.map((number)=>
    <li>{number}</li>
    );

    return <ul>{listItems}</ul>;

    // ReactDOM.render(
    //     <ul>{listItems}</ul>,
    //     document.getElementById('root')
    // );
}
export default NumberList;