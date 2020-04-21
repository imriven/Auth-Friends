import React, { useState } from 'react';
import { useHistory } from "react-router-dom"
import axios from "axios"




const Login = () => {
    const history = useHistory()
    const [formState, setFormState] = useState({
        username: "",
        password: "",
      });

    const handleLogin = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', formState)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          history.push('/friendslist');
        })
        // setFormState({
        //     username: "",
        //     password: "",
            
        //   })

    }
    const handleChange = e => {
        e.persist()
        setFormState(previous => ({...previous, [e.target.name]: e.target.value}))
    }

    return (
        <div>
             <form onSubmit={handleLogin}>
        
          <label htmlFor="username">
           User Name: 
            <input
              id="username"
              type="text"
              name="username"
              value={formState.username}
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </label>
          <label htmlFor="password">
            Password: 
            <input
              id="password"
              type="text"
              name="password"
              value={formState.password}
              onChange={handleChange}
              placeholder="Enter Password"

            />
          </label>
        
          <button onClick={handleLogin}>Login</button>
          </form>
        </div>
    )

}

export default Login;

