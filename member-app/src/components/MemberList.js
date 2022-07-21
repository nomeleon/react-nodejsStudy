/* eslint-disable */
import React from 'react';
import MemberListItem from './MemberListItem';
import './MemberList.scss';

// const TodoList = () => {
//   return (
//     <div className="TodoList">
//       <TodoListItem />
//       <TodoListItem />
//       <TodoListItem />
//     </div>
//   );
// };
///////////////////////////////////////////////////////
// const TodoList = ({ todos, onRemove, onToggle }) => {
const MemberList = ({ members, onUpdate, onRemove }) => {
  return (
    <div className="TodoList">
      {members.map((member) => (
        <MemberListItem
          member={member}
          key={member.no}
          onUpdate={onUpdate}
          onRemove={onRemove}
          // onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default MemberList;
