import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/Slice/Todoslice';

function TodoList() {
  const todos = useSelector((state) => state.todos); // Access the todos state from Redux store
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
