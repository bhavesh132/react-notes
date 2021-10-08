import NotesList from './components/NotesList'
import { useState } from 'react'
import { nanoid } from 'nanoid';
import './App.css'


const App = () => { 
  const [notes, setNotes] = useState([])
  const [searchText, setSeacrhText] = useState("")


    const addNote = (text) => { 
      const date= new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString()
      }
      const newNotes = [...notes, newNote]
      setNotes(newNotes)
    }

    const deleteNote = (id)=>{
     const newNotes = notes.filter((note)=> note.id !== id)
     setNotes(newNotes)
    }

  return ( 
    <div className='main'>
      <h1><center>My Notes</center></h1>
      <div className='container'>
        <NotesList notes={notes.filter(
          (note)=>note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote} 
          handleDeleteNote = {deleteNote} 
          handleSearch = {setSeacrhText} /> 
      </div>
    </div>
  )
}

export default App
