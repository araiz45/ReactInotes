import NoteContext from './NoteContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NoteState = (props) =>{
  const host = 'http://localhost:5000'
  const initailState = []
  const [state, setState] = useState(initailState);
  const [name, setName] = useState("")
  let navigate = useNavigate();
  const [login, setLogin] = useState(false)

  const getNotes = async () =>{
    let store = localStorage.getItem("token")
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        'auth-token': store
       
      }
    })
    const json = await response.json();
    // console.log(json)
    
    // console.log(store)
    setState(json)
  }

  const addNote = async (title, description, tag) =>{
    let store = localStorage.getItem("token")
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        'auth-token': store
       
      },
      body: JSON.stringify({"title": title,"description": description, "tag": tag}), 
    })

      getNotes();

  }

  
  // let resettingAddNotes = addNote();
  // console.log(resettingAddNotes)



  const deleteNote = async (id) =>{
    let store = localStorage.getItem("token")
    console.log("delete notes with id " + id)
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json",
        'auth-token': store
       
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
    let store = localStorage.getItem("token")
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
        'auth-token': store
       
      },
      body: JSON.stringify({title: title, description: description, tag: tag}), 
    });

    getNotes();
  }
  const getUser = async () =>{
    let store = localStorage.getItem("token")
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST", 
      headers: {
        // "Content-Type": "application/json",
        'auth-token': store
       
      }
    })
    const json = await response.json().then((value) =>{
        console.log(value.users.name)
        setName(value.users.name)
    })
    
    // console.log(store)
    // setState(json)
  }
  const checkLogin = () =>{
    if(localStorage.getItem('token') === null){
      navigate('/login');
      setLogin(false)
      console.log("this is checklogin reporting : false")
    }else{
      setLogin(true)
      console.log("this is checklogin reporting : true")
      getUser() 
      // console.log(userName)
    }
  }
  return (
    <NoteContext.Provider value={{state, addNote, deleteNote, editNote, getNotes, checkLogin, login, name}}>
      {props.children}
    </NoteContext.Provider>
  )
  
}

export default NoteState