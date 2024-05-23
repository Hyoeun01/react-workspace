import React, { useState } from "react";

function RequestForm(props){
    const [value, setValue] = useState('요청사항을 입력하세요');

    const handleChange = (event) => {
        setValue(event.target.value); 
    }

    const handleSubmit = (event) => {
        alert('입력한 요청사항 : ' + value ); 
        event.prevantDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청사항:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출하기</button>
        </form>
    );
}

export default RequestForm;