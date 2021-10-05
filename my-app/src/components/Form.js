import React from "react";
import classes from './Form.module.css'

const Form = (props) => {
    const inputTextHandler = (e)=>{
        props.setInputText(e.target.value)
    }

    const submitTodoHandler =(e) => {
        e.preventDefault();
        props.setTodos([...props.todos, {text: props.inputText, completed: false, id: Math.random()*1000}])
        console.log([{text: props.inputText, completed: false, id: (Math.random()*1000).toFixed(0)}])
        props.setInputText('');
    }


    return (
        <div>
            <form>
                <input value={props.inputText} onChange={inputTextHandler} type='text' className={classes.todoInput} />
                <button className={classes.todoBtn} onClick={submitTodoHandler}>ADD ITEM</button>
                
            </form>
        </div>
    )
}


export default Form