import React, { useState, useEffect } from 'react'
import ProfilePreview from '../components/ProfilePreview';
import Post from '../components/Post';
import { getProfileDetails } from '../redux/profile/profileActions';
import Leaderboard from '../components/Leaderboard';
import { useDispatch, useSelector } from 'react-redux';

const Homepage = () => {

  const { profileInfo, accessToken} = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (accessToken) {
      dispatch(getProfileDetails())
    }
  }, [accessToken, dispatch])

  const fullName = profileInfo.profile.firstname + ' ' + profileInfo.profile.lastname;
  const img = profileInfo.profile.profileImg === '' ? 'https://avatars.githubusercontent.com/u/66757774?v=4' : profileInfo.profile.profileImg;

  return (
    <div id='homepage'>
      <div><ProfilePreview fullName={fullName} img={img} /></div>
      <div><Post /></div>
      <div><Leaderboard /></div>        
    </div>
  )
}

export default Homepage;