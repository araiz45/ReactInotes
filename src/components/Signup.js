import React ,{ useRef }from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    let navigate = useNavigate();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({name: name.current.value, email: email.current.value, password: password.current.value }),
        });
        const json = response.json().then((value)=>{
            console.log(value)
            navigate('/login');
        })
    }
  return (
    <div>
        <h1 className='my-4'>Signup</h1>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name' ref={name}/>
    </div>
    <div className="mb-3">
      <label htmlFor="signup-email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="signup-email" aria-describedby="emailHelp" name='email' ref={email}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" name='password' ref={password}/>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </form></div>
  )
}

export default Signup