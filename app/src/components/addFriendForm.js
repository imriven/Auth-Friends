import React, { useState } from 'react';
import { useHistory } from "react-router-dom"
import { axiosWithAuth } from "../utils/auth"

const AddFriendForm = () => {
    const history = useHistory()
    const [formState, setFormState] = useState({
        name: "",
        age: "",
        email: "",
      });

    const handleLogin = e => {
        e.preventDefault()
        axiosWithAuth().post('http://localhost:5000/api/friends', formState)
        .then(res => {
          history.push('/friendslist');
        })
        .catch(err => console.log(err))

    }
    const handleChange = e => {
        e.persist()
        setFormState(previous => ({...previous, [e.target.name]: e.target.value}))
    }

    return (
        <div>
             <form onSubmit={handleLogin}>
        
          <label htmlFor="name">
           Name: 
            <input
              id="name"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </label>
          <label htmlFor="email">
            Email: 
            <input
              id="email"
              type="text"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Enter email"

            />
          </label>
          <label htmlFor="age">
            Age: 
            <input
              id="age"
              type="text"
              name="age"
              value={formState.age}
              onChange={handleChange}
              placeholder="Enter age"

            />
          </label>
        
          <button onClick={handleLogin}>Add Friend</button>
          </form>
        </div>
    )

}

export default AddFriendForm;