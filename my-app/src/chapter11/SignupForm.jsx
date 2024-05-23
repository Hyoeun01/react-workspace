import React, { useReducer, useState } from "react";

function reducer(state, action){
    return{
        ...state,
        [action.name]:action.value
    }
}

function SignupForm(props){

    const [state, dispatch]=useReducer(reducer ,{
        name:'',
        gender:'',
        address:''
    });
    const {name, gender, address} = state;
    const handleChange = e => {dispatch(e.target);}

    const handleSubmit = (event) => {
        alert(`이름 : ${name}, 성별 : ${gender}, 주소 : ${address}`);
        event.preventDefault();
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>이름 :
                    <input type="text" name="name" value={name} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>성별 :
                <input type="radio" value={"남자"} name="gender" onChange={handleChange} /> 남자
                <input type="radio" value={"여자"} name="gender" onChange={handleChange} /> 여자
                </label>
            </div>
            <div>
                <label>주소 :
                    <input type="text" name="address" value={address} onChange={handleChange} />
                </label>
            </div>
            <button type="submit">제출하기</button>
        </form>
    );
}
export default SignupForm;