import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function handleLgin(e){
        e.preventDefault()
        console.log(email,password)
    }
    function handleEmail(e){
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <form onSubmit={handleLgin} className='col-12 col-md-6'>
                    <div className='mt-2'>
                        <h2>Login </h2>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email"
                            onChange={handleEmail} />

                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" id="password" 
                            onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
