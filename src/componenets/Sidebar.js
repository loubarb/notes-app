import React from "react";

function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebarHeader">
        <h1>Notes</h1>
        <button>+ Add</button>
      </div>

      <div className="sidebarNotes">

        <div className="sidebarNote">
          <div className="sidebarNoteTitle">
            <h3>Title</h3>
          </div>
          <div className="sidebarNotePreview">
            <p>Note Preview</p>
          </div>
          <div className="sidebarNoteModified">
            <p>Last Modified:</p>
          </div>
        </div>

        <div className="sidebarNote">
          <div className="sidebarNoteTitle">
            <h3>Title</h3>
          </div>
          <div className="sidebarNotePreview">
            <p>Note Preview</p>
          </div>
          <div className="sidebarNoteModified">
            <p>Last Modified:</p>
          </div>
        </div>

        <div className="sidebarNote">
          <div className="sidebarNoteTitle">
            <h3>Title</h3>
          </div>
          <div className="sidebarNotePreview">
            <p>Note Preview</p>
          </div>
          <div className="sidebarNoteModified">
            <p>Last Modified:</p>
          </div>
        </div>

        <div className="sidebarNote">
          <div className="sidebarNoteTitle">
            <h3>Title</h3>
          </div>
          <div className="sidebarNotePreview">
            <p>Note Preview</p>
          </div>
          <div className="sidebarNoteModified">
            <p>Last Modified:</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar;