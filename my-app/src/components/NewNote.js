import { useState } from 'react'
import classes from './Note.module.css'

const NewNote = (props) => {
    const [noteText, setNoteText] = useState("")
    const charLimit = 300;

    const handleChange = (e) => {
        if(charLimit - e.target.value.length >=0){
           setNoteText(e.target.value)
        }
    }

    const handleSave = () => {
        if (noteText.trim().length > 0){
            props.handleAddNote(noteText)
            setNoteText("")
        }
        else {
            alert("Please Add some Text!")
        }
        
    }

    return (
        <div className={classes.noteNew}>
            <textarea rows='8' cols='10' placeholder='type to add a Note' onChange={handleChange} value={noteText}></textarea>
        <div className={classes.noteFooter}>
            <small>{charLimit-noteText.length} Remaining</small>
            <button className={classes.save} onClick={handleSave}>SAVE</button>
        </div>
        </div>
    )
}

export default NewNote