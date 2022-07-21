/* eslint-disable */

import "./App.css";
import { Component, Fragment } from "react";
import MyComponent, { MyComponent2, MyComponent3 } from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice.";
import FormInput from "./FormInput";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidatiorSample";
import RefSample from "./RefSample";
import FormInput_class from "./FromInput_class";
import IterationSample from "./IterationSample";
import ErrorBoundary from "./ErrorBoundary";
import LifeCycleSample from "./LifeCycleSample";

// //함수 기반 컴포넌트
// function App() {
//   const name = "react";
//   return (
//     <Fragment>
//       <div className="react">{name}</div>
//       <input />
//     </Fragment>
//   );
// }

// //클래스 기반
// class App extends Component {
//   render() {
//     const name = "hi";
//     return <div className="react">{name}</div>;
//   }
// }

// //화살표 함수
// const App = () => {
//   return <MyComponent />;
// };

// // name = 컴포넌트 props.name으로 전달
// const App = () => {
//   return <MyComponent name="hi" />;
// };

// const App = () => {
//   return (
//     <div>
//       <MyComponent>리액트</MyComponent>
//       <br />
//       <MyComponent2 name={"soyeon2"} favoriteNumber={2}>
//         리액트2
//       </MyComponent2>
//       <br />
//       <MyComponent3 name={"soyeon3"} favoriteNumber={3}>
//         리액트3
//       </MyComponent3>
//     </div>
//   );
// };

// const App = () => {
//   return <Counter></Counter>;
// };

// const App = () => {
//   return <Say></Say>;
// };

// const App = () => {
//   return <EventPractice></EventPractice>;
// };

// const App = () => {
//   return <FormInput></FormInput>;
// };

// const App = () => {
//   return <FormInput_class></FormInput_class>;
// };

// const App = () => {
//   return <ScrollBox></ScrollBox>;
// };

// const App = () => {
//   return <ValidationSample></ValidationSample>;
// };

// const App = () => {
//   return <RefSample></RefSample>;
// };

// const App = () => {
//   return <IterationSample></IterationSample>;
// };

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
