import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (e) =>{
    setUsername(e.target.value);
  }

  const onChangePassword = (e) =>{
    setPassword(e.target.value);
  }

  const onSubmit = (e) =>{
    e.preventDefault();

    const profile = {
      username: username,
      password: password
    }
    axios.post('http://localhost:5000/login', profile)
    .then(res => console.log(res.data))
    .catch((error)=>{
      console.log(error);
    });

  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-primary min-vh-100'>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div className="">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" id="usernameLogin" onChange={onChangeUsername} />
        </div>
        <div className="">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={onChangePassword} />
        </div>
        <button type="login" className="btn btn-secondary">Login</button>
      </form>
    </div>
  )
}

export default Login