import React from 'react'
import { Link } from 'react-router-dom'
export const Jumbotron = () => {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                <h4 className="alert-heading">Login Required</h4>
                <p>You are not login, Please login to continue or signup to make a new account</p>
                <hr />
                <Link className="btn btn-primary mx-1" to='/login' role='button'>Login</Link>
                <Link className="btn btn-primary mx-1" to='/signup' role='button'>Signup</Link>
            </div>
        </div>
    )
}
