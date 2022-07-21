/* eslint-disable */

import { useCallback, useReducer, useRef, useState } from "react";

const init_from = {
  id: "",
  pw: "",
  regi_num1: "",
  regi_num2: "",
  phone: "",
};

function reducer(state, action) {
  if (action.name === "btn") {
    return init_from;
  } else {
    return {
      ...state,
      [action.name]: action.value,
    };
  }
}

const FormInput = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form, dispatch] = useReducer(reducer, init_from);
  const { id, pw, regi_num1, regi_num2, phone } = form;

  const input_ref = useRef([]);
  // const input_id = useRef();
  // const input_pw = useRef();
  // const input_regi_num1 = useRef();
  // const input_regi_num2 = useRef();
  // const input_phone = useRef();

  const onChange = (e) => {
    dispatch(e.target);
  };
  // const onClick = (e) => {
  //   alert(
  //     "id, pw, regi_num, phone: " +
  //       id +
  //       " / " +
  //       pw +
  //       " / " +
  //       regi_num1 +
  //       "-" +
  //       regi_num2 +
  //       " / " +
  //       phone
  //   );
  //   dispatch(e.target);
  // };

  // const onKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     if (e.target.name === "id") {
  //       input_pw.current.focus();
  //     }
  //     if (e.target.name === "pw") {
  //       input_regi_num1.current.focus();
  //     }
  //     if (e.target.name === "regi_num1") {
  //       input_regi_num2.current.focus();
  //     }
  //     if (e.target.name === "regi_num2") {
  //       input_phone.current.focus();
  //     }
  //     if (e.target.name === "phone") {
  //       onClick();
  //     }
  //   }
  // };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.target.name === "id") {
        input_ref.current[1].focus();
      }
      if (e.target.name === "pw") {
        input_ref.current[2].focus();
      }
      if (e.target.name === "regi_num1") {
        input_ref.current[3].focus();
      }
      if (e.target.name === "regi_num2") {
        input_ref.current[4].focus();
      }
      if (e.target.name === "phone") {
        onClick();
      }
    }
  };

  const onInsert = useCallback(
    (form) => {
      const member = {
        id,
        pw,
        regi_num1,
        regi_num2,
        phone,
      };
      dispatch(form.concat(member));
    },
    [form]
  );

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
                // ref={input_id}
                ref={(el) => {
                  input_ref.current[0] = el;
                }}
                onChange={onChange}
                onKeyPress={onKeyPress}
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
                // ref={input_pw}
                ref={(el) => {
                  input_ref.current[1] = el;
                }}
                onChange={onChange}
                onKeyPress={onKeyPress}
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
                // ref={input_regi_num1}
                ref={(el) => {
                  input_ref.current[2] = el;
                }}
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
              -
              <input
                type="text"
                name="regi_num2"
                maxLength={7}
                placeholder="주민번호 뒷자리"
                value={regi_num2}
                // ref={input_regi_num2}
                ref={(el) => {
                  input_ref.current[3] = el;
                }}
                onChange={onChange}
                onKeyPress={onKeyPress}
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
                // ref={input_phone}
                ref={(el) => {
                  input_ref.current[4] = el;
                }}
                onChange={onChange}
                onKeyPress={onKeyPress}
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr align="center">
            <td colSpan={2}>
              <button
                name="btn"
                onInsert={onInsert}
                ref={(el) => {
                  input_ref.current[5] = el;
                }}
              >
                join
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default FormInput;
