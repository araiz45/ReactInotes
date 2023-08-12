import { Notes } from './Notes'
import Alert from './Alert'
import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";
const Home = () => {
  return (
    <div>
      <Notes />
    </div>
  )
}

export default Home