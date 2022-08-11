import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const onChangeFirstname = (e) => {
    setFirstname(e.target.value);
  }

  const onChangeLastname = (e) => {
    setLastname(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const newProfile = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password
    }
    axios.post('http://localhost:5000/register', newProfile)
      .then(res => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });

  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-primary min-vh-100'>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div className="">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" id="usernameLogin" onChange={onChangeUsername} />
        </div>
        <div className="">
          <label className="form-label">Firstname</label>
          <input type="text" className="form-control" id="firstnameLogin" onChange={onChangeFirstname} />
        </div>
        <div>
          <label className="form-label">Lastname</label>
          <input type="text" className="form-control" id="lastnameLogin" onChange={onChangeLastname} />
        </div>
        <div className="">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={onChangePassword} />
        </div>
        <button type="register" className="btn btn-secondary">Register</button>
      </form>
    </div>
  )
}

export default Register