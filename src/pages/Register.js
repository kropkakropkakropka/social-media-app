import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerProfile } from '../redux/profile/profileActions';

const Register = () => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success } = useSelector((state) => state.profile);

  useEffect(()=>{
    if(success){navigate('/')}
  }, [navigate, success]);

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
      username: username.toLowerCase(),
      password: password
    }
    dispatch(registerProfile(newProfile));
  }
  return (
    <div className='form-container center'>
      <div className='form bg-content'>
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
          <div className="input-area flex">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" id="usernameLogin" onChange={onChangeUsername} />
          </div>
          <div className="input-area flex">
            <label className="form-label">Firstname</label>
            <input type="text" className="form-control" id="firstnameLogin" onChange={onChangeFirstname} />
          </div>
          <div className="input-area flex">
            <label className="form-label">Lastname</label>
            <input type="text" className="form-control" id="lastnameLogin" onChange={onChangeLastname} />
          </div>
          <div className="input-area flex">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={onChangePassword} />
          </div>
          <button type="register" className="btn btn-secondary">Register</button>
        </form>
        <p>Already have an account? <Link to="/">Login here</Link></p>
      </div>
    </div>
  )
}

export default Register