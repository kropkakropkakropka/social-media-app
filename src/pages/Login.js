import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginProfile } from '../redux/profile/profileActions';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, profileInfo, error, success } = useSelector((state) => state.profile);
  
  useEffect(()=>{
    if(success){navigate('/homepage')}
  }, [navigate, profileInfo, success]);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const profile = {
      username: username.toLowerCase(),
      password: password
    }
    dispatch(loginProfile(profile))
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