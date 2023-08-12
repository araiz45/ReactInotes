import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import noteContext from "../context/notes/NoteContext";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const context = useContext(noteContext);
  const { login,checkLogin, name } = context;
  let navigate = useNavigate();
  let location = useLocation();  
  useEffect(() => {
    // Google Analytics
  //  console.log(location.pathname)
  }, [location]);

  const handleLogout = () =>{
    localStorage.clear();
    navigate('/login');
    checkLogin()
  }

// checkLogin()
// let checkLoginVar = checkLogin();
  return (
    <><nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">iNoteBook</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/' ?'active':''}`} aria-current="page" to="/">Home</Link> 
            {/* <Link className={`nav-link ${location.pathname === '/' ?'active':''}`} aria-current="page" to="/">Home</Link> */}
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/about' ?'active':''}`} to="/about">About</Link>
          </li>
        </ul>
        <form className="d-flex align-items-center" role="search">
          {login === false ? <><Link className="btn btn-primary mx-1" to='/login' role='button'>Login</Link>
          <Link className="btn btn-primary mx-1" to='/signup' role='button'>Signup</Link></>:<><h5 className='text-light mb-0 mx-3'>Hi {name}</h5><button type="button" class="btn btn-primary" onClick={handleLogout}>Logout</button></>}
        </form>
      </div>
    </div>
  </nav></>
  )
}

export default Navbar