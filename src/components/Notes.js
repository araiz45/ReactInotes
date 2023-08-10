import React, { useState, useContext } from 'react'
import noteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'

export const Notes = () => {
    const context = useContext(noteContext)
    const {state, setState} = context
  return (
    <div className="row my-3 gap-3 text-center justify-content-center">
    <h2>Your notes</h2>
    {state.map((note) =>{
        return <NoteItem note={note} key={note._id}/>
    })}
  </div>
  )
}
