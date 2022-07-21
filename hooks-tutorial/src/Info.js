/* eslint-disable */
import React, { useEffect, useReducer, useState } from "react";
import useInputs from "./useInputs";

// const Info = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");

//   //리액트 컴포넌트가 랜더링될 때마다 특정 작업을 수행하도록 설정한다.
//   // useEffect(param1, param2) :
//   // param1 렌더링 시 수행할 특정 작업
//   // param2 변경 시 실행 / param2 비워놓으면 계속 렌더링 / 빈 배열 [] 기재 시 useEffect 실행 X
//   // useEffect(() => {
//   //   console.log("렌더링 완료");
//   //   console.log({
//   //     name,
//   //     nickname,
//   //   });
//   //   //update 전 실행
//   //   return () => {
//   //     console.log("cleanup");
//   //     console.log(name);
//   //   };
//   // }, [name]);

//   useEffect(() => {
//     console.log("effect");
//     //값 update 전 실행
//     return () => {
//       console.log("umonut");
//       console.log(name);
//     };
//   }, [name]);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input name="name" value={name} onChange={onChangeName} />
//         <input name="nickname" value={nickname} onChange={onChangeNickname} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임: </b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };
//////////////////////////////////////////////////////////////
// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }
// const Info = () => {
//   const [state, dispatch] = useReducer(reducer, {
//     name: "",
//     nickname: "",
//   });
//   const { name, nickname } = state;

//   const onChange = (e) => {
//     console.log(e.target);
//     dispatch(e.target);
//   };
//   return (
//     <div>
//       <div>
//         <input name="name" value={name} onChange={onChange} />
//         <input name="nickname" value={nickname} onChange={onChange} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임: </b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };
//////////////////////////////////////////////////////////
const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
