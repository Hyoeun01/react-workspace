import React, { useReducer, useState } from "react";

function reducer(state, action){
    return{
        ...state,
        [action.name]:action.value
    }
}
// 제어 컴포넌트 : 사용자의 입력을 직접적으로 제어할 수 있다
function NameForm(props){
    //const [name, setName] = useState('');
    // const [message, setMessage] = useState('');
    // const [fruit, setFruit] = useState('');

    const [state, dispatch]=useReducer(reducer ,{
        name:'',
        message:'',
        season:''
    });
    const {name,message,season} = state;
    const handleChange= e=>{
        dispatch(e.target);
    }

    // const handleChangeName = (event) => {
    //     setName(event.target.value.toUpperCase()); // toUpperCase() : 캡스락없이도 대문자만 나오게된다
    // }
    // const handleChangeMessage = (event) => {
    //     setMessage(event.target.value.toUpperCase()); 
    // }
    // const handleChangeFruit = (event) => {
    //     setName(event.target.value.toUpperCase()); 
    // }

    const handleSubmit = (event) => {
        alert(`입력한 이름 : ${name}, 요청사항 : ${message}, 좋아하는 계절 : ${season}` ); // 백틱에 넣어도됩니다
        event.prevantDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
            <label>
                요청:
                <textarea name="message" value={message} onChange={handleChange} />
            </label>
            <label>
                좋아하는계절:
                <select name="season" value={season} onChange={handleChange} >
                <option value="봄">봄</option>
                <option value="여름">여름</option>
                <option value="가을">가을</option>
                <option value="겨울">겨울</option>
                </select>
            </label>
            <button type="submit">제출하기</button>
        </form>
    );
}

export default NameForm;