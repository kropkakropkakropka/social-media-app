import React, { useState } from 'react';
import ProfilePreview from '../components/ProfilePreview';
import Post from '../components/Post';
import Leaderboard from '../components/Leaderboard';

const Homepage = () => {
  return (
    <div id='homepage'>
      <div><ProfilePreview /></div>
      <div><Post /></div>
      <div><Leaderboard /></div>        
    </div>
  )
}

export default Homepage;