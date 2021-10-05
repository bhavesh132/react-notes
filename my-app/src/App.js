import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  // const [filteredTodos, setFilteredTodos] = useState([]); 
  
  return (
    <div>
      <h1>TODO's For Today</h1>
      <br />
      <div className="main">
      <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus}
      status={status}
      />
      <TodoList setTodos={setTodos} todos={todos}/>
      </div>
    </div>
  )
}

export default App
