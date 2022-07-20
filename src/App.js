import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Main from './componenets/Main';
import Sidebar from './componenets/Sidebar';

function App() {
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      title: '',
      body: '',
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const updateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote
      }

      return note
    });

    setNotes(updatedNotesArray)
  }

  const removeNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        addNote={addNote}
        removeNote={removeNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} updateNote={updateNote} />
    </div>
  );
}

export default App;
