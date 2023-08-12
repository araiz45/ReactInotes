import './App.css';
import React from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <>
    {/* <NoteState >
      <RouterProvider router={router} />
    </NoteState> */}
    <BrowserRouter>
    <NoteState>
      <Navbar/>
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      </div>
      </NoteState>
    </BrowserRouter>
    </>
  );
}

export default App;
