import React, { useState, useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

export const Notes = () => {
  const context = useContext(noteContext);
  const { state, getNotes, editNote } = context;
  const [note, setNote] = useState({ utitle: "", udescription: "", utag: "" })
  useEffect(() => {
    getNotes();
  }, []);
  const ref = useRef(null);
  const closeRef = useRef(null)
  const updateNotes = (currentNote) => {
    setNote({id: currentNote._id,utitle: currentNote.title, udescription: currentNote.description, utag: currentNote.tag})
    ref.current.click();
  };
  const handleClick = (e) => {
    e.preventDefault();
    closeRef.current.click();
    console.log("hited", note.id)

    editNote(note.id,note.utitle, note.udescription, note.utag)
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <>
      <AddNote />
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref} hidden>
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Note
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {" "}
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" name="utitle" id="update-title" aria-describedby="textHelp"
                    onChange={onChange} value={note.utitle}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input type="text" className="form-control" id="udescription" name="udescription" onChange={onChange} value={note.udescription}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    tag
                  </label>
                  <input type="text" className="form-control" id="update-tag" name="utag" onChange={onChange} value={note.utag}/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" hidden className="btn btn-secondary" ref={closeRef} data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Update note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 gap-3 text-center justify-content-center">
        <h2>Your notes</h2>
        {state.map((note) => {
          return (
            <NoteItem note={note} updateNote={updateNotes} key={note._id} />
          );
        })}
      </div>
    </>
  );
};
