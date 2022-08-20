import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const profile = {
      username: username,
      password: password
    }
    axios.post('http://localhost:5000/login', profile)
      .then(res => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <div className='form-container center'>
      <div className='form bg-content'>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <div className="input-area flex">
            <label className="form-label" htmlFor='usernameLogin' >Username</label>
            <input type="text" className="form-control" id="usernameLogin" onChange={onChangeUsername} />
          </div>
          <div className="input-area flex">
            <label className="form-label" htmlFor='userPassword'>Password</label>
            <input type="password" className="form-control" id="userPassword" onChange={onChangePassword} />
          </div>
          <button type="login" className="btn btn-secondary">Login</button>
        </form>
        <div>
          <p>Don't have an account yet? <Link to="/register">Register here</Link></p>
          <p>Forgot your password? <Link to="/register">Click here</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login