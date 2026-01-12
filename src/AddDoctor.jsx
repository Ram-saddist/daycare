import React, { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddDoctor() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [salary, setSalary] = useState("")
    const [specialization, setSpecialization] = useState("")

    const navigate=useNavigate()
    function handleAdd(e){
        e.preventDefault()
        let newDoctor={
            name:name, age:age,salary:salary,gender:gender,specialization:specialization
        }
        axios.post("https://doc-back.onrender.com/doctors",newDoctor)
            .then((res)=>{
                console.log(res)
                if(res.status===201){
                    alert("Added successfully")
                    navigate("/")
                }
            })
            .catch(err=>{
                console.log(err)
            })
    }
    
    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <form onSubmit={handleAdd} className='col-12 col-md-6'>
                    <div className='mt-2'>
                        <h2>Add Doctor </h2>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="email"
                            onChange={(e)=>setName(e.target.value)} />

                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Age</label>
                        <input 
                            type="text" 
                            className="form-control" id="password" 
                            onChange={(e)=>setAge(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Gender</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="email"
                            onChange={(e)=>setGender(e.target.value)} />

                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Salary</label>
                        <input 
                            type="text" 
                            className="form-control" id="password" 
                            onChange={(e)=>setSalary(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Specialization</label>
                        <input 
                            type="text" 
                            className="form-control" id="password" 
                            onChange={(e)=>setSpecialization(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
