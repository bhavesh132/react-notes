import React from "react";
import classes from './Todo.module.css'

const Todo = (props) => {
    // Events
    const deleteHandler = () => {
        console.log(props.todo)
        props.setTodos(props.todos.filter((el)=> el.id !== props.todo.id))
    }

    const completeHandler = () => {
        props.setTodos(props.todos.map((item)=> {
            if (item.id === props.todo.id){
                return {...item, completed: !item.completed}
            }
            return item
        })
        )
    }

    return (
        <div className={classes.todoItem}>
            <li className={`${classes.todo} ${props.todo.completed ? classes.completed: ''}`}> 
                <div className={classes.todoText}> 
                    {props.name}
                </div>
            </li>
            <div className={classes.action}>
                <button onClick={completeHandler} className={classes.completeBtn}>{props.todo.completed? "Not Completed" : "Complete"}</button>
                <button onClick={deleteHandler} className={classes.deleteBtn}>Delete</button>
            </div>
        </div>
    )
}

export default Todo