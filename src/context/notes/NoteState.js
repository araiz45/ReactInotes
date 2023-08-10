import NoteContext from './NoteContext';
import { useState } from 'react';

const NoteState = (props) =>{
  const initailState = [
    {
      "_id": "64d382b26fa7bcc6a3b1f6fb",
      "user": "64d382976fa7bcc6a3b1f6f8",
      "title": "this is xtitle",
      "description": "thisdf ssdasdsazidsfs me",
      "tag": "private",
      "date": "1691583053767",
      "__v": 0
    },
    {
      "_id": "64d383796fa7bcc6a3b1f701",
      "user": "64d382976fa7bcc6a3b1f6f8",
      "title": "this is title",
      "description": "this is me",
      "tag": "private",
      "date": "1691583053767",
      "__v": 0
    }
  ]
  const [state, setState] = useState(initailState)
  return (
    <NoteContext.Provider value={{state, setState}}>
      {props.children}
    </NoteContext.Provider>
  )
  
}


export default NoteState