import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding : 1em;
    background : grey;`;

const Title = styled.h1`
    font-size: 1.5em;
    color : white;
    text-align:center;`;

const Button = styled.button`
    color : ${ props => props.dark ? "white" : "black"};
    background : ${ props => props.dark ? "black" : "white"};
    border : 1px solid black; `;

const RoundedButton = styled(Button)`
    border-radius :  16px ; `;
function MainPage1(props){
    return (
        <Wrapper>
            <Title> 아무리 그래도 이렇게 쓰면 안되겠지 </Title>
            <Button>White</Button>
            <Button dark>Dark</Button>

            <RoundedButton>Round-button</RoundedButton>
            <RoundedButton dark>Round-button</RoundedButton>
        </Wrapper>
        
    );
}

export default MainPage1;