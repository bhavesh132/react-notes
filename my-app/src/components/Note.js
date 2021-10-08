import classes from './Note.module.css'
import { MdDelete } from 'react-icons/md'

const Note = (props) => {
    return (
        <div className={classes.note}>
            <div className={classes.noteText}>{props.text}
            </div>
            <div className={classes.noteFooter}>
                <small>{props.date}</small>
                <MdDelete className={classes.deleteIcon} size='1.3em'onClick={()=> props.handleDeleteNote(props.id)}/>
            </div>
        </div>
    )
}

export default Note