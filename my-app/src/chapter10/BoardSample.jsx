import React, { useState } from "react";

function BoardSample(props){
    const [boards, setBoards] = useState ([
        {id : 1, name : '유저1', title : '제목1', content : '사과'},
        {id : 2, name : '유저2', title : '제목2', content : '수박'},
        {id : 3, name : '유저3', title : '제목3', content : '포도'},
        {id : 4, name : '유저4', title : '제목4', content : '참외'}
    ]);

    const [inputName, setInputName] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');
    const [nextId, setNextId] = useState(5);

    const boardList = boards.map(board =>
        <div key={board.id} onDoubleClick={() => onRemove(board.id)}>
            <div>이름 : {board.name}</div>
            <div>제목 : {board.title}</div>
            <div>내용 : {board.content}</div>
            <hr/><hr />
        </div>
    )


    const onChangeName = e => setInputName(e.target.value);
    const onChangeTitle = e => setInputTitle(e.target.value);
    const onChangeContent = e => setInputContent(e.target.value);

    const onClick = () => {
        const nextBoards = boards.concat({
            id : nextId , 
            name : inputName,
            title : inputTitle,
            content : inputContent
        });
        setNextId(nextId+1);
        setBoards(nextBoards);
        setInputName('');
        setInputTitle('');
        setInputContent('');
    }


    const onRemove = id =>{
        const nextBoards = boards.filter(board => board.id !== id );
        setBoards(nextBoards)
    };

    return (<>
            <input placeholder="이름" value={inputName} onChange={onChangeName} />
            <input placeholder="제목" value={inputTitle} onChange={onChangeTitle} />
            <input placeholder="내용" value={inputContent} onChange={onChangeContent} />
            <button onClick={onClick}>추가</button>
            <ul>{boardList}</ul>
    </>)
}

export default BoardSample;