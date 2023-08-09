import './App.css';
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <Navbar />
        <Home />
        </>
      ),
    },
    {
      path: "about",
      element: ( <>
        <Navbar />
        <About/>
      </>)
    },
  ]);  
  return (
    <>
    <NoteState >
      <RouterProvider router={router} />
    </NoteState>
    </>
  );
}

export default App;
