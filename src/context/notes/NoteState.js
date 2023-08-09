import { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) =>{
    const s1 = {
        "name": "harray",
        "class": "4b"
    }
    const [updating, setupdating] = useState(s1);
    const update = () =>{
        setTimeout(() => {
            setupdating({
                "name": "Jerry",
                "class": "34c"
            })
        }, 3000);
    }
    return (
        <NoteContext.Provider value={{updating, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;