import React, { useState } from "react";

// 제어 컴포넌트 : 사용자의 입력을 직접적으로 제어할 수 있다
function NameForm(props){
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert('입력한 이름 : '+ value);
        event.prevantDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <button type="submit">제출하기</button>
        </form>
    );
}

export default NameForm;