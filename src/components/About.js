import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/NoteContext'
const About = () => {
  let a = useContext(noteContext);
  useEffect(() => {
      a.update()
    // eslint-disable-next-line 
  }, [])
  
  return (
    <div>this is about {a.updating.name} and he is in {a.updating.class}</div>
  )
}

export default About