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
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNTY1MTdjMGE3YjAyZDFmNTZlMDc1In0sImlhdCI6MTY5MTcwNzAwNH0.NT8A8D9PTMN0Wo4gzyOlY5EtkFTPOwfwlv0C05NBiNI'
       
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
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkNTY1MTdjMGE3YjAyZDFmNTZlMDc1In0sImlhdCI6MTY5MTcwNzAwNH0.NT8A8D9PTMN0Wo4gzyOlY5EtkFTPOwfwlv0C05NBiNI'
       
      },
      body: JSON.stringify(title, description, tag), 
    });
    const json =  await response.json(); 
    console.log(json)
      const note = {
        "_id": Date.now(),
        "user": "64d382976fa7bcc6a3b1f6f8 [Added]",
        "title": title,
        "description": description,
        "tag": "private",
        "date": Date.now(),
        "__v": 0
      };
      setState(state.concat(note))
  }
  const deleteNote = (id) =>{
    console.log("delete notes with id " + id)
    const newState = state.filter((note) =>{
        return note._id!==id;
    })
    setState(newState)
  }
  const editNote = async (id, title, description, tag) =>{
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRkMzgyOTc2ZmE3YmNjNmEzYjFmNmY4In0sImlhdCI6MTY5MTU4MzI3N30.-3fOWaRRM3AmcMo72_kCXKTBNr7zPFFU4oAHaLSBsIA'
       
      },
      body: JSON.stringify(title, description, tag), 
    });
  
      for (let index = 0; index < state.length; index++) {
        const element = state[index];
        if (element._id === id) {
          element.title = title;
          element.description = description;
          element.tag = tag;
        }else{

        }
        
      }
  }
  return (
    <NoteContext.Provider value={{state, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  )
  
}


export default NoteState