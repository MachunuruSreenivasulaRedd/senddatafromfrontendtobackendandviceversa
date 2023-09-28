import React, { useState } from 'react'
import axios from 'axios'
import './index.css'

function UserDetails() {
  const [data, setData] = useState({
    userName: '',
    Email: '',
    age: '',
    location: '',
})
  const [show, setShow] = useState(false)
  const [response ,setResponse] = useState([])
  
  const submitForm = async e => {
    e.preventDefault()
    const {Email, age} = data
    if (Email.endsWith("@gmail.com") && (age >=18 && age <=45)){
    try{
        await axios.post("http://localhost:8000", {
            data
        })
        .then(res => {
            if(res.data === "fail"){
                alert("enter valid data")
            }
            else{
                setResponse(res.data[res.data.length - 1])
                setShow(true)
                setData({
                    userName: '',
                    Email: '',
                    age: '',
                    location: '',
                })
            }
        })
        .catch(res => {
            alert(res)
        })
    }
    catch(e){
        console.log(e)
    }
}
else{
    alert("Enter valid Email id and age should range from 18 to 45")
}
  }
    

  return (
    <div className='container'>
        <div className='userDetailsContainer'>
            <p>{show ? `Uniq_Id: ${response._id}` : null}</p>
            </div>
        <form onSubmit={submitForm} className='formContainer'>
            <label htmlFor='userName'>userName</label>
            <input id="userName" type="text" value={data.userName} onChange={e => (setData({...data,userName:e.target.value}) , setShow(false))} />
            <label htmlFor='email'>Email</label>
            <input id="email" value={data.Email} type="email" onChange={e => setData({...data,Email:e.target.value})} />
            <label htmlFor='age'>age</label>
            <input id="location" value={data.age} type="number" onChange={e => setData({...data,age:e.target.value})} />
            <label htmlFor='location' type="text">location</label>
            <input id="location" value={data.location} onChange={e => setData({...data,location:e.target.value})} />
            <button type="submit" onClick={submitForm} className='submitBtn'>submit</button>
        </form>
    </div>
  )
}

export default UserDetails
