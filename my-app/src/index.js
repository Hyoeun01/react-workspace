import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter03/Library';
import StudentList from './chapter03/StudentList';
import ConfirmDialog from './chapter04/ConfirmDialog';
import Clock from './chapter04/Clock';
import PropsEx from './chapter05/PropsEx';
import CommentList from './chapter05/CommentList';
import BoardList from './chapter05/BoardList';
import NotificationList from './chapter06/NotificationList';
import Counter from './chapter07/Counter';
import Info from './chapter07/Info';
import Average from './chapter07/Average';
import Accommodate from './chapter07/Accommodate';
import ConfirmButton from './chapter08/ConfirmButton';
import ConfirmButton2 from './chapter08/ConfirmButton2';
import Toggle from './chapter08/Toggle';
import Toggle2 from './chapter08/Toggle2';
import Say from './chapter08/Say';
import EventPractice from './chapter08/EventPractice';
import Greeting from './chapter09/Greeting';
import LoginControl from './chapter09/LoginControl';
import MainPage from './chapter09/MainPage';
import LandingPage from './chapter09/LandingPage';
import NumberList from './chapter10/NumberList';
import StudentItemList from './chapter10/StudentItemList';
import IterationSample from './chapter10/IterationSample';
import BoardSample from './chapter10/BoardSample';
import NameForm from './chapter11/NameForm';
import RequestForm from './chapter11/RequestForm';
import SignupForm from './chapter11/SignupForm';
import SignUp2 from './chapter11/Signup2';
import Calculator from './chapter12/Calculator';
import WelcomeDialog from './chapter13/WelcomeDialog';


const root = ReactDOM.createRoot(document.getElementById('root'));
 //setInterval(() => {
  root.render(
    <React.StrictMode>
      {/* <App /> */}
      {/* <Library />
      <StudentList />
      <ConfirmDialog /> */}
      {/* <Clock /> */}
      {/* <PropsEx /> */}
      {/* <CommentList /> */}
      {/* <BoardList /> */}
      {/* <NotificationList /> */}
      {/* <Counter /> */}
      {/* <Info /> */}
      {/* <Average /> */}
      {/* <Accommodate /> */}
      {/* <ConfirmButton /> */}
      {/* <ConfirmButton2 /> */}
      {/* <Toggle /> */}
      {/* <Toggle2 /> */}
      {/* <Say /> */}
      {/* <EventPractice /> */}
      {/* <Greeting /> */}
      {/* <LoginControl /> */}
      {/* <MainPage /> */}
      {/* <LandingPage /> */}
      {/* <NumberList /> */}
      {/* <StudentItemList /> */}
      {/* <IterationSample /> */}
      {/* <BoardSample /> */}
      {/* <NameForm /> */}
      {/* <RequestForm /> */}
      {/* <SignupForm /> */}
      {/* <SignUp2 /> */}
      {/* <Calculator /> */}
      <WelcomeDialog />
    </React.StrictMode>
  );
  //  },1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
