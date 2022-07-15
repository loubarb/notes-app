import React from "react";

function Main({ activeNote }) {
  if (!activeNote) return <div className="noActiveNote">No Active Note</div>
  return (
    <div className="mainContainer">
      <div className="mainNoteEdit">
        <input type="text" className="noteTitle" placeholder="Note Title"/>
        <textarea />
      </div>

      <div className="mainNotePreview">
        <div className="mainNotePreviewTitle">
          <h1>{activeNote.title}</h1>
        </div>
        <div className="mainNoteLivePreview">{activeNote.body}</div>
      </div>
    </div>
  )
}

export default Main;