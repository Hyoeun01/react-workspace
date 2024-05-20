import React, { useEffect, useReducer, useState } from "react";
import useInputs from "./UseInputs";


function reducer(state, action){
    return{
        ...state,
        [action.name]:action.value
    };
}
function Info(){
    const [state, onChange]=useInputs({
        name:'', nickname:'', addr:'', phone:''
    });
    // const [state, dispatch]=useReducer(reducer,{
    //     name:'', nickname:'', addr:'', phone:''
    // });
    const {name,nickname,addr,phone}=state;
    // const onChange = e =>{ dispatch(e.target); };

    return(
        <div>
            <div>
            <input name="name" value={name} onChange={onChange} />
            <input name="nickname" value={nickname} onChange={onChange} />
            <input name="addr" value={addr} onChange={onChange} />
            <input name="phone" value={phone} onChange={onChange} />
            </div>
            <div>
                <div><b>이름 : </b>{name}</div>
            </div>
            <div>
                <div><b>닉네임 : </b>{nickname}</div>
            </div>  
            <div>
                <div><b>주소 : </b>{addr}</div>
            </div>  
            <div>
                <div><b>전화번호 : </b>{phone}</div>
            </div>  
        </div>
    )
    // const [name, setName]=useState('');
    // const [nickname, setNickname]=useState('');

    // useEffect( ()=>{
    //     console.log('렌더링 완료');
    //     console.log({name,nickname});
    //     return () =>{
    //         console.log('cleanup');
    //         console.log(name);
    //     }
    // },[name]); // 빈 배열을 넣으면 mount와 unmount 사이에 한번만 작동함, 배열을 생략하면 재렌더링 될때마다 실행됨

    // const onChangeName = e =>{
    //     setName(e.target.value);
    // };

    // const onChangeNickname = e => {
    //     setNickname(e.target.value);
    // };

    // return (
    //     <div>
    //         <div>
    //             <input value={name} onChange={onChangeName} />
    //             <input value={nickname} onChange={onChangeNickname} />
    //         </div>
    //         <div>
    //             <div><b>이름 : </b>{name}</div>
    //             <div><b>닉네임 : </b>{nickname}</div>
    //         </div>  
    //     </div>
    // );
}

export default Info;