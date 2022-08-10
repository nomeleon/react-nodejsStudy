import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import BoardWrite from "./BoradWrite";
import BoradList from "./BoardList";
import BoardDetail from "./BoardDetail";
import BoardUpdateForm from "./BoardUpdateForm";

function App() {
  //0:글쓰기,  1:상세보기, 2:글수정
  const [actionMode, setActionMode] = useState({ mode: 2 });

  if (actionMode.mode === 0) {
    return (
      <div>
        <BoardWrite></BoardWrite>
        <br />
        <BoradList></BoradList>
      </div>
    );
  } else if (actionMode.mode === 1) {
    return (
      <div>
        <BoardDetail></BoardDetail>
        <br />
        <BoradList></BoradList>
      </div>
    );
  } else if (actionMode.mode === 2) {
    return (
      <div>
        <BoardUpdateForm></BoardUpdateForm>
        <br />
        <BoradList></BoradList>
      </div>
    );
  }
}

export default App;
