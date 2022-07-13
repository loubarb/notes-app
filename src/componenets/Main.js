import React from "react";

function Main() {
  return (
    <div className="mainContainer">
      <div className="mainNoteEdit">
        <input type="text" placeholder="Note Title"/>
        <textarea />
      </div>

      <div className="mainNotePreview">
        <div className="mainNotePreviewTitle">
          <h1>Note Preview</h1>
        </div>
        <div className="mainNoteLivePreview"></div>
      </div>
    </div>
  )
}

export default Main;