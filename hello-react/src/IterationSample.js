import React, { useState } from "react";

// const IterationSample = () => {
//   const names = ["눈사람", "얼음", "눈", "바람"];
//   const nameList = names.map((name, index) => <li key={index}>{name}</li>);
//   return <ul>{nameList}</ul>;
// };

// const IterationSample = () => {
//   const [names, setNames] = useState([
//     { id: 1, text: "눈사람" },
//     { id: 2, text: "얼음" },
//     { id: 3, text: "눈" },
//     { id: 4, text: "바람" },
//   ]);
//   const [inputText, setInputText] = useState("");
//   //새로운 항목 추가 시 사용할 id
//   const [nextId, setNextId] = useState(5);

//   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
//   return <ul>{nameList}</ul>;
// };

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  //새로운 항목 추가 시 사용할 id
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id로 설정하고
      text: inputText,
    });
    setNextId(nextId + 1); //nextId 값에 1을 더해준다.
    setNames(nextNames); // names 값을 업데이트한다.
    setInputText(""); // inputText를 비운다.
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>add</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
