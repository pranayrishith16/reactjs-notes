import { useState } from 'react';
import './index.css';
import NoteList from './components/NotesList';

function App() {
  const [notes, setnotes] = useState([])
  return (
    <div className="container">
      <NoteList/>
    </div>
  );
}

export default App;
