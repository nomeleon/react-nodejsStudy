/* eslint-disable */
import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './MemberInsert.scss';

const init_form = {
  id: '',
  pw: '',
  email: '',
  gender: '',
};

const MemberInsert = ({ onInsert }) => {
  const [form, setForm] = useState(init_form);
  const { id, pw, email, gender } = form;

  const onChange = (e) => {
    const nextFrom = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFrom);
  };

  const onSubmit = useCallback(
    (e) => {
      onInsert(form);
      setForm(init_form); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위하여 이   함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, form],
  );

  return (
    <form onSubmit={onSubmit}>
      <div className="TodoInsert">
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          name="id"
          value={id}
          onChange={onChange}
        />
      </div>
      <div className="TodoInsert">
        <input
          type="text"
          placeholder="비밀번호를 입력하세요"
          name="pw"
          value={pw}
          onChange={onChange}
        />
      </div>
      <div className="TodoInsert">
        <input
          type="text"
          placeholder="이메일을 입력하세요"
          name="email"
          value={email}
          onChange={onChange}
        />
      </div>
      <div className="TodoInsert">
        <input
          type="text"
          placeholder="성별을 입력하세요"
          name="gender"
          value={gender}
          onChange={onChange}
        />
      </div>
      <div className="TodoInsert">
        <button type="submit">
          join
          {/* <MdAdd /> */}
        </button>
      </div>
    </form>
  );
};
//////////////////////////////////////////////
// const TodoInsert = ({ onInsert }) => {
//   const [value, setValue] = useState('');

//   const onChange = useCallback((e) => {
//     setValue(e.target.value);
//   }, []);

//   const onSubmit = useCallback(
//     (e) => {
//       onInsert(value);
//       setValue(''); // value 값 초기화

//       // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
//       // 이를 방지하기 위하여 이 함수를 호출합니다.
//       e.preventDefault();
//     },
//     [onInsert, value],
//   );

//   return (
//     <form className="TodoInsert" onSubmit={onSubmit}>
//       <input
//         placeholder="할 일을 입력하세요"
//         value={value}
//         onChange={onChange}
//       />
//       <button type="submit">
//         <MdAdd />
//       </button>
//     </form>
//   );
// };

export default MemberInsert;
