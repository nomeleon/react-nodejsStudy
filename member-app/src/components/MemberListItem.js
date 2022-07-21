/* eslint-disable */
import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './MemberListItem.scss';

// const TodoListItem = () => {
//   return (
//     <div className="TodoListItem">
//       <div className="checkbox">
//         <MdCheckBoxOutlineBlank />
//         <div className="text">할 일</div>
//       </div>
//       <div className="remove">
//         <MdRemoveCircleOutline />
//       </div>
//     </div>
//   );
// };
//////////////////////////////////////////////////
// const TodoListItem = ({ member, onRemove, onToggle }) => {
const MemberListItem = ({ member, onRemove }) => {
  const { no, id, pw, email, gender } = member;

  return (
    <div className="TodoListItem">
      {/* <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} */}
      <div className="text">
        회원 {member.no} 정보
        <br />
        id : {member.id}
        <br />
        pw : {member.pw}
        <br />
        email : {member.email}
        <br />
        gender : {member.gender}
      </div>
      {/* </div> */}
      <div className="update" onClick={() => onUpdate(no)}>
        수정
      </div>
      <div className="remove" onClick={() => onRemove(no)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default MemberListItem;
