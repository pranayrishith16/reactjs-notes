import { useEffect, useState } from 'react';
import {nanoid} from 'nanoid'
import Search from './components/Search'
import Header from './components/Header'
import './index.css';
import NoteList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data',JSON.stringify(notes));
  }, [notes])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote]
    setNotes(newNotes);
  } 

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={setSearchText}/>
      <NoteList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText)  )} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
