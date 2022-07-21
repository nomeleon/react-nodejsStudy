/* eslint-disable */
import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

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
const TodoListItem = ({ member, onRemove }) => {
  const { no, id, pw, email, gender } = member;

  return (
    <div className="TodoListItem">
      {/* <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} */}
      <div className="text">
        {member.id}, {member.pw}, {member.email}, {member.gender}
      </div>
      {/* </div> */}
      <div className="remove" onClick={() => onRemove(no)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
