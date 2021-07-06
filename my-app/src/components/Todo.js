import { useState } from 'react'

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [ modalIsOpen, setModalisOpen ] = useState(false);

    function deleteHandler() {
        setModalisOpen(true);
    }

    function closeModalHandler(){
        setModalisOpen(false);
    }
    
    return (
        <div className="card">
         <h2>{props.text}</h2>
         <div className="actions">
          <button className="btn" onClick={deleteHandler}>DELETE</button>  
         </div> 
         { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
         { modalIsOpen && <Backdrop onClick = {closeModalHandler} />  }
       </div>
    );
}

export default Todo;