import NoteContext from './NoteContext';
import { useState } from 'react';

const NoteState = (props) =>{
  const host = 'http://localhost:5000'
  const initailState = []
  const [state, setState] = useState(initailState);


  
  const getNotes = async () =>{
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNTY1N2JjMGE3YjAyZDFmNTZlMDhkIn0sImlhdCI6MTY5MTcwOTM3N30.oun3f63on-VvGUCOlYB269RhEe0JxAaLwGZq0c3YqJE'
       
      }
    })
    const json = await response.json();
    console.log(json)
    setState(json)
  }

  const addNote = async (title, description, tag) =>{
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNTY1N2JjMGE3YjAyZDFmNTZlMDhkIn0sImlhdCI6MTY5MTcwOTM3N30.oun3f63on-VvGUCOlYB269RhEe0JxAaLwGZq0c3YqJE'
       
      },
      body: JSON.stringify({"title": title,"description": description, "tag": tag}), 
    })

      getNotes();

  }

  
  // let resettingAddNotes = addNote();
  // console.log(resettingAddNotes)



  const deleteNote = async (id) =>{
    console.log("delete notes with id " + id)
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNTY1N2JjMGE3YjAyZDFmNTZlMDhkIn0sImlhdCI6MTY5MTcwOTM3N30.oun3f63on-VvGUCOlYB269RhEe0JxAaLwGZq0c3YqJE'
       
      }
    })
    const json = await response.json();
    console.log(json)
    // setState(json)
    const newState = state.filter((note) =>{
        return note._id!==id;
    })
    setState(newState)
  }

  const editNote = async (id, title, description, tag) =>{
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNTY1N2JjMGE3YjAyZDFmNTZlMDhkIn0sImlhdCI6MTY5MTcwOTM3N30.oun3f63on-VvGUCOlYB269RhEe0JxAaLwGZq0c3YqJE'
       
      },
      body: JSON.stringify({title: title, description: description, tag: tag}), 
    });

    getNotes();
  }
  return (
    <NoteContext.Provider value={{state, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
  
}

export default NoteState