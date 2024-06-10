function MyButton(props){
    // react의 상태값을 모두 false로(버튼이 눌러지지 않은상태)
    const [isClicked,setIsClicked]=React.useState(false);

    // createElement > 버튼 엘리멘트 생성
    return React.createElement(
        'button',
        {onClick: () => setIsClicked(true)},
        isClicked ? 'Clicked!' : 'Click Here!'
    )
}
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MyButton))