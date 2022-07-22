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
//
//////////////////////////////////////
const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
