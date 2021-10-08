import classes from './NotesList.module.css'
import Note from './Note';
import NewNote from './NewNote'
import Search from './Search';

const NotesList = (props) => {
    return (
        <div className={classes.allNotes}>
            <Search handleSearch = {props.handleSearch}/>
            <div className={classes.noteList}>
            {props.notes.map((note)=>(
                <Note text={note.text} date={note.date} id={note.id} handleDeleteNote={props.handleDeleteNote}/>
            ))}
            <NewNote handleAddNote={props.handleAddNote}/>
            </div>
        </div>
    )
}

export default NotesList