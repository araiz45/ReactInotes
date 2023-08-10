import React, { useState, useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

export const Notes = () => {
  const context = useContext(noteContext);
  const { state, addNote } = context;
  return (
    <>
      <AddNote />
      <div className="row my-3 gap-3 text-center justify-content-center">
        <h2>Your notes</h2>
        {state.map((note) => {
          return <NoteItem note={note} key={note._id} />;
        })}
      </div>
    </>
  );
};
