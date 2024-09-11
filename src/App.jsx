import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './component/TodoInput'
import TodoList from './component/Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>To Do app</h1>
      <TodoInput/>
      <TodoList/>
    </>
  )
}

export default App
