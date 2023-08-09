import './App.css';
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
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
      element: ( 
      <>
        <Navbar/>
        <About/>
      </>)
    },
  ]);  
  return (
    <>
      <RouterProvider exact router={router} />
    </>
  );
}

export default App;
