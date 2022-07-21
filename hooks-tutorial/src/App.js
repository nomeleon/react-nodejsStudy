/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import Info from "./Info";
import { useState } from "react";
import FormInput from "./FormInput";
import Average from "./Average";

// const App = () => {
//   return <Counter></Counter>;
// };

// const App = () => {
//   return <Info></Info>;
// };

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

// const App = () => {
//   return <FormInput></FormInput>;
// };

// const App = () => {
//   return <Average></Average>;
// };

export default App;
