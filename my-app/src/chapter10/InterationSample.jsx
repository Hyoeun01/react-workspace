import React, { useState } from "react";

function InterationSample(props){
    const [names, setNames] = useState ([
        {id : 1, text : '사과'},
        {id : 2, text : '수박'},
        {id : 3, text : '포도'},
        {id : 4, text : '참외'}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value)
    const onClick = () => {
        const nextNames = names.concat({
            id : nextId , 
            text : inputText
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    }

    const nameList = names.map( name => <li id={name.id}>{name.text}</li>)
    return <>
    <input value = {inputText} onChange={onChange} />
    <button onClick={onclick}>추가</button>
    <ul>{nameList}</ul>
    </>;
}

export default InterationSample;