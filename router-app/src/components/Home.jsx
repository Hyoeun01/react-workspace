import React from "react";
import { useNavigate } from "react-router-dom";

function Home(props){
    const navigate = useNavigate();
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보이는 페이지</p>
            <button onClick={()=>navigate("/profile/sung")}>성씨 프로필</button>
            <button onClick={()=>navigate("/profile/hong")}>홍씨 프로필</button>
        </div>
    );
};

export default Home;