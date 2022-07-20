import React from 'react'
import './LoginForm.css'
import {useState} from "react"

function LoginForm({Login, error }) {
   const [details, setDetails] =useState({name:"" , email:"" , password:""})
  const submitHandler = e =>{
    e.preventDefault();
    Login(details);
  }
  return (
    <div  className="container">
            <div className="login-dark p-3 shadow-lg rounded mx-auto mt-5 w-50">
                <div className="pt-3">
                    <h2 className="text-white ">Sign In | Dark</h2>
                </div>

                <form onSubmit={submitHandler} className="mt-5">
                    <div className="form-group">
                      {(error !="") ? (<div className="error">{error})</div>) : "" }
                        <input type="email" 
                            className="form-control form-control-sm bg-light" 
                            placeholder="Email Id" onChange={e=> setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>

                    <div className="form-group">
                        <input type="password" 
                            className="form-control form-control-sm bg-light" 
                            placeholder="Password" onChange={e=> setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="rememberCheckBox"/>
                        <label className="form-check-label text-light" for="rememberCheckBox">Remember me?</label>
                    </div>

                    <div className="mt-5">
                        <input type="submit" value="Login" className="btn btn-sm btn-light col"/>
                            
                        
                    </div>

                    <div className="text-center mt-2">
                        <a href="#" className="text-warning">Forgot Password?</a>
                    </div>
                    
                    <div className="mt-5">
                        <p className="text-white text-center">
                            Don't have an account?
                            <a href="#" className="text-warning">Click here to register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default LoginForm