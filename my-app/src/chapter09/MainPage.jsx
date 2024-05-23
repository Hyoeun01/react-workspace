import React, { useState } from "react";

// 컴포넌트 렌더링 막기 : null 리턴

function WarningBanner(props){
    if(!props.warning){
        return null; // 렌더링 x
    }
    return(
        <div>경고!</div>
    );
}

function MainPage(props){
    const [showWarning, setShowWarning] = useState(false);
    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    return (
        <div>
            <WarningBanner warning={showWarning} />
            <button onClick={handleToggleClick} >
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    );
}

export default MainPage;