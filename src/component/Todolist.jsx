import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../redux/Slice/Todoslice';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [updatedText, setUpdatedText] = useState('');

  const handleUpdateClick = (todo) => {
    setEditingId(todo.id);
    setUpdatedText(todo.text);
  };

  const handleUpdate = () => {
    dispatch(updateTodo({ id: editingId, text: updatedText }));
    setEditingId(null);
    setUpdatedText('');
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {editingId === todo.id ? (
            <>
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
              <button onClick={handleUpdate}>Save</button>
            </>
          ) : (
            <>
              {todo.text}
              <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
              <button onClick={() => handleUpdateClick(todo)}>Update</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
