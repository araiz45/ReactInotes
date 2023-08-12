import { Notes } from './Notes'
import Alert from './Alert'
import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NoteContext";
import { useNavigate } from 'react-router-dom';
import { Jumbotron } from './Jumbotron';
const Home = () => {
  const context = useContext(noteContext);
  const { login,checkLogin } = context;
  let navigate = useNavigate();
  return (
    <div>
      {checkLogin()}
      {login === true? <Notes />: <Jumbotron />}
    </div>
  )
}

export default Home