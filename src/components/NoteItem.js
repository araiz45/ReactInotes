import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note } = props
    return (
        <div className='col-md-3'>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash-can" style={{color: "#000"}} onClick={() =>{deleteNote(note._id)}}></i>
                    <i className="fa-solid fa-pencil mx-3" style={{color: "#1b1bcf"}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem