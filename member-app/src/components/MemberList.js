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
const MemberList = ({ members, onGetMember, onRemove }) => {
  // console.log(members);
  return (
    <div className="TodoList">
      {members.map((member) => (
        <MemberListItem
          member={member}
          key={member.no}
          onGetMember={onGetMember}
          onRemove={onRemove}
          // onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default MemberList;
