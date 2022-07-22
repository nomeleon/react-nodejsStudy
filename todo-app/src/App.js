/* eslint-disable */
//yarn add sass classnames react-icons
//yarn add react-virtualized
import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useReducer, useRef, useState } from 'react';
import { toIdentifier } from '../../../Users/aischool/AppData/Local/Microsoft/TypeScript/4.7/node_modules/@babel/types/lib/index';

// const App = () => {
//   return (
//     <TodoTemplate>
//       <TodoInsert></TodoInsert>
//       <TodoList></TodoList>
//     </TodoTemplate>
//   );
// };

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 4; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReeducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(
    todoReeducer,
    undefined,
    createBulkTodos,
  );

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(5);

  // const onInsert = useCallback((text) => {
  //   const todo = {
  //     id: nextId.current,
  //     text,
  //     checked: false,
  //   };
  //   setTodos((todos) => todos.concat(todo));
  //   nextId.current += 1; // nextId 1 씩 더하기
  // }, []);

  // const onRemove = useCallback((id) => {
  //   //선택한 id와 동일하지 않은 요소만 반환
  //   setTodos((todos) => todos.filter((todo) => todo.id !== id));
  // }, []);

  // const onToggle = useCallback((id) => {
  //   setTodos((todos) =>
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //     ),
  //   );
  // }, []);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; // nextId 1 씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    //선택한 id와 동일하지 않은 요소만 반환
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
