import React from "react";

function Main({ activeNote, updateNote }) {
  const editField = (key, value) => {
    updateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    })
  }

  if (!activeNote) return <div className="noActiveNote">No Active Note</div>
  return (
    <div className="mainContainer">
      <div className="mainNoteEdit">
        <input type="text" id="title" value={activeNote.title} placeholder="Note Title" onChange={(e) => editField("title", e.target.value)}/>
        <textarea id="body" placeholder="Write your note here..." value={activeNote.body} onChange={(e) => editField("body", e.target.value)}/>
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