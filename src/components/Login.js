import React , { useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from "../context/notes/NoteContext";

const Login = () => {
    const context = useContext(noteContext);
    const { checkLogin } = context;
    let navigate = useNavigate();
    const password = useRef(null)
    const email = useRef(null)
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email.current.value, password.current.value)
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({ email: email.current.value, password: password.current.value }),
        });
        const json = response.json().then((value)=>{
            if(value.success){
                localStorage.setItem("token", value.authToken);
                navigate('/');
                checkLogin()
            }else{
                alert("invalid credentails")
            }
        })
        // console.log(json.PromiseResult)
    }
    return (
        <div className='mt-4 px-5'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' ref={email}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" >Password</label>
                    <input type="password" className="form-control" ref={password} id="password" name='password' />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form></div>
    )
}

export default Login