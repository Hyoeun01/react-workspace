import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage= numbers => {
    console.log("평균값 계산");
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=>a+b);
    return sum / numbers.length;
};

function Average(props){
    const [list, setList]=useState([]);
    const [number, setNumber]=useState('');
    const inputEl=useRef(null); // useRef를 사용하여 등록버튼을 클릭하면 자동으로 input에 포커스를 맞추도록한다

    const onChange = useCallback( e=>{
        setNumber(e.target.value);
    },[]);

    // useMemo와 유사하지만 값이 아닌 함수를 반환하며, 의존성 배열에 따라 Memorized 값을 반환한다는 점에서는 동일
    const onInsert= useCallback(e => { 
        const nextList=list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    },[number, list]);

    // const onChange = e => {
    //     setNumber(e.target.value);
    // };

    // const onInsert= e=> {
    //     const nextList = list.concat(parseInt(number));
    //     setList(nextList);
    //     setNumber('')
    // }
    
    const avg=useMemo(()=> getAverage(list),[list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value,index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div><b>평균값 : </b>{avg}</div>
        </div>
    )
}

export default Average;