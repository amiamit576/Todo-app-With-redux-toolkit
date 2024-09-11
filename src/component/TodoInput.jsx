import React, { useState } from 'react'
 import {  useDispatch } from 'react-redux'
 import { addTodo } from '../redux/Slice/Todoslice'

function TodoInput() {

     const dispatch=useDispatch()
    const[todo,setTodo]=useState('')
    function addTodoStore()  {
        dispatch(addTodo(todo));
        
       
     } 
   

  return (
    <div>
        <input type="text"  onChange={e => setTodo(e.target.value)} />
        <button onClick={addTodoStore} >Add Todo</button>
      
    </div>
  )
}

export default TodoInput
