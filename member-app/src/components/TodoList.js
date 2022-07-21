/* eslint-disable */
import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

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
const TodoList = ({ members, onRemove }) => {
  return (
    <div className="TodoList">
      {members.map((member) => (
        <TodoListItem
          member={member}
          key={member.no}
          onRemove={onRemove}
          // onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
