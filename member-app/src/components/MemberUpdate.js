/* eslint-disable */
import React, { useState, useCallback } from 'react';
import './MemberUpdate.scss';

const MemberUpdate = ({ pickMember, onUpate }) => {
  //   console.log('memberUpdate.js pick member');
  //   console.log(pickMember);

  const [member, setMember] = useState({
    no: pickMember[0].no,
    id: pickMember[0].id,
    pw: pickMember[0].pw,
    email: pickMember[0].email,
    gender: pickMember[0].gender,
  });
  //   console.log(member);

  const onChange = (e) => {
    const updateMember = {
      ...member,
      [e.target.name]: e.target.value,
    };
    setMember(updateMember);
  };

  const onClick = useCallback(
    (e) => {
      //   console.log(member);
      onUpate(member);
      e.preventDefault();
    },
    [onUpate, member],
  );

  return (
    <form>
      <div className="TodoInsert">
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          name="id"
          value={member.id}
          onChange={onChange}
        />
      </div>
      <div className="TodoInsert">
        <input
          type="text"
          placeholder="비밀번호를 입력하세요"
          name="pw"
          value={member.pw}
          onChange={onChange}
        />
      </div>
      <div className="TodoInsert">
        <input
          type="text"
          placeholder="이메일을 입력하세요"
          name="email"
          value={member.email}
          onChange={onChange}
        />
      </div>
      <div className="TodoInsert">
        <input
          type="text"
          placeholder="성별을 입력하세요"
          name="gender"
          value={member.gender}
          onChange={onChange}
        />
      </div>
      <div className="TodoInsert">
        <button type="button" onClick={onClick}>
          update
          {/* <MdAdd /> */}
        </button>
      </div>
    </form>
  );
};

export default MemberUpdate;
