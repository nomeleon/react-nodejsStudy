/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import SassComponent from "./SassComponent";
import React, { Component } from "react";
import CSSModule from "./CSSModule";
import StyledComponent from "./StyledComponent";

class App extends Component {
  render() {
    return (
      <div>
        {/* <SassComponent /> */}
        {/* <CSSModule></CSSModule> */}
        <StyledComponent></StyledComponent>
      </div>
    );
  }
}

export default App;
