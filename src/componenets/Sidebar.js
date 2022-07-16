import React from 'react';

function Sidebar({ notes, addNote, removeNote, activeNote, setActiveNote }) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)

  return (
    <div className="sidebarContainer">
      <div className="sidebarHeader">
        <h1>Notes</h1>
        <button onClick={addNote}>+ Add</button>
      </div>

      <div className="sidebarNotes">
        {sortedNotes.map((note) => (
          <div
            className={`sidebarNote ${note.id === activeNote && 'active'}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebarNoteTitle">
              <strong>{note.title}</strong>
              <button onClick={() => removeNote(note.id)}>- Delete</button>
            </div>
            <p>{note.body && note.body.substring(0, 100)}</p>
            <p>
              Last Modified:{' '}
              {new Date(note.lastModified).toLocaleDateString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
