import React from 'react'
import Todo from './Todo'
import classes from './TodoList.module.css'

const TodoList = (props) => 
{
    return (
        <div className='todo-container'>
            <h3>TODO Items</h3>
            <ul className={classes.todoList}>
                {props.todos.map(todo =>(
                    <Todo 
                    key={todo.id} 
                    name={todo.text}
                    todo={todo}
                    todos={props.todos}
                    setTodos={props.setTodos} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList