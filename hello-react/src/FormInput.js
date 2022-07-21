import { useState } from "react";

const FormInput = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form, setForm] = useState({
    id: "",
    pw: "",
    regi_num1: "",
    regi_num2: "",
    phone: "",
  });
  const { id, pw, regi_num1, regi_num2, phone } = form;
  const onChange = (e) => {
    setTimeout(() => console.log(e), 500);
    const nextFrom = {
      ...form, //기존의 form 내용을 이 자리에 복사 한 뒤
      [e.target.name]: e.target.value, //원하는 값을 덮어씌우기
    };
    setForm(nextFrom);
  };
  const onClick = () => {
    alert(
      " id, pw, regi_num, phone: " +
        id +
        "/" +
        pw +
        "/" +
        regi_num1 +
        "-" +
        regi_num2 +
        "/" +
        phone
    );
    setForm({
      id: "",
      pw: "",
      regi_num1: "",
      regi_num2: "",
      phone: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1 align="center">회원가입</h1>
      <table border={1} align="center">
        <tbody>
          <tr>
            <td>아이디</td>
            <td>
              <input
                type="text"
                name="id"
                size={10}
                placeholder="id"
                value={id}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                type="text"
                name="pw"
                placeholder="pw"
                value={pw}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td>주민번호</td>
            <td>
              <input
                type="text"
                name="regi_num1"
                maxLength={6}
                placeholder="생년월일"
                value={regi_num1}
                onChange={onChange}
              />
              -
              <input
                type="text"
                name="regi_num2"
                maxLength={7}
                placeholder="주민번호 뒷자리"
                value={regi_num2}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                type="text"
                name="phone"
                placeholder="-없이 숫자만 입력해주세요."
                value={phone}
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr align="center">
            <td colSpan={2}>
              <button onClick={onClick}>join</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

//ref
// import React, { Component } from "react";
// class FormInput extends Component {
//   state = {
//     id: "",
//     password: "",
//     jumin1: "",
//     jumin2: "",
//     tel1: "",
//     tel2: "",
//     tel3: "",
//   };

//   onChange = (e) => {
//     // setTimeout(() => console.log(e), 500)
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//     // console.log(e.target.name, ":", e.target.value);
//   };

//   onClick = () => {
//     alert(
//       "아이디: " +
//         this.state.id +
//         "\n" +
//         "비밀번호: " +
//         this.state.password +
//         "\n" +
//         "주민번호: " +
//         this.state.jumin1 +
//         "-" +
//         this.state.jumin2 +
//         "\n" +
//         "전화번호: " +
//         this.state.tel1 +
//         "-" +
//         this.state.tel2 +
//         "-" +
//         this.state.tel3
//     );
//     this.setState({
//       id: "",
//       password: "",
//       jumin1: "",
//       jumin2: "",
//       tel1: "",
//       tel2: "",
//       tel3: "",
//     });
//   };

//   onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       if (e.target.name === "id") {
//         this.input_pw.focus();
//       } else if (e.target.name === "password") {
//         this.input_jumin1.focus();
//       } else if (e.target.name === "jumin1") {
//         this.input_jumin2.focus();
//       } else if (e.target.name === "jumin2") {
//         this.input_tel1.focus();
//       } else if (e.target.name === "tel1") {
//         this.input_tel2.focus();
//       } else if (e.target.name === "tel2") {
//         this.input_tel3.focus();
//       } else if (e.target.name === "tel3") {
//         this.input_btn.focus();
//       }
//     }
//   };

//   render() {
//     return (
//       <div>
//         <center>
//           <h1>회원가입</h1>
//         </center>
//         <table align="center" border="1" width="400">
//           <tr>
//             <td>아이디</td>
//             <td>
//               <input
//                 ref={(ref) => (this.input_id = ref)}
//                 type="text"
//                 name="id"
//                 placeholder="아이디"
//                 value={this.state.id}
//                 onChange={this.onChange}
//                 onKeyPress={this.onKeyPress}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>비밀번호</td>
//             <td>
//               <input
//                 ref={(ref) => (this.input_pw = ref)}
//                 type="text"
//                 name="password"
//                 placeholder="비밀번호"
//                 value={this.password}
//                 onChange={this.onChange}
//                 onKeyPress={this.onKeyPress}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>주민번호</td>
//             <td>
//               <input
//                 ref={(ref) => (this.input_jumin1 = ref)}
//                 size="10"
//                 type="text"
//                 name="jumin1"
//                 placeholder="앞6자리"
//                 value={this.jumin1}
//                 onChange={this.onChange}
//                 onKeyPress={this.onKeyPress}
//               />
//               -
//               <input
//                 size="10"
//                 type="text"
//                 name="jumin2"
//                 placeholder="뒤7자리"
//                 value={this.jumin2}
//                 onChange={this.onChange}
//                 onKeyPress={this.onKeyPress}
//                 ref={(ref) => (this.input_jumin2 = ref)}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td>전화번호</td>
//             <td>
//               <input
//                 size="5"
//                 type="tel"
//                 name="tel1"
//                 placeholder="3자리"
//                 value={this.tel1}
//                 onChange={this.onChange}
//                 onKeyPress={this.onKeyPress}
//                 ref={(ref) => (this.input_tel1 = ref)}
//               />
//               -
//               <input
//                 size="5"
//                 type="tel"
//                 name="tel2"
//                 placeholder="4자리"
//                 value={this.tel2}
//                 onChange={this.onChange}
//                 onKeyPress={this.onKeyPress}
//                 ref={(ref) => (this.input_tel2 = ref)}
//               />
//               -
//               <input
//                 size="5"
//                 type="tel"
//                 name="tel3"
//                 placeholder="4자리"
//                 value={this.tel3}
//                 onChange={this.onChange}
//                 onKeyPress={this.onKeyPress}
//                 ref={(ref) => (this.input_tel3 = ref)}
//               />
//             </td>
//           </tr>
//           <tr>
//             <td colSpan="2" align="center">
//               <button
//                 onClick={this.onClick}
//                 ref={(ref) => (this.input_btn = ref)}
//               >
//                 입력
//               </button>
//             </td>
//           </tr>
//         </table>
//       </div>
//     );
//   }
// }

export default FormInput;
