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

    const nameList = names.map( name => <li id={name.id}>{name.text}</li>)
    return <ul>{nameList}</ul>;
}

export default InterationSample;