import React, { useEffect, useState } from "react";

function Info(){
    const [name, setName]=useState('');
    const [nickname, setNickname]=useState('');

    useEffect( ()=>{
        console.log('렌더링 완료');
        console.log({name,nickname});
        return () =>{
            console.log('cleanup');
            console.log(name);
        }
    },[name]); // 빈 배열을 넣으면 mount와 unmount 사이에 한번만 작동함, 배열을 생략하면 재렌더링 될때마다 실행됨

    const onChangeName = e =>{
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div><b>이름 : </b>{name}</div>
                <div><b>닉네임 : </b>{nickname}</div>
            </div>  
        </div>
    );
}

export default Info;