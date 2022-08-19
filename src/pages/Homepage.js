import React, { useState } from 'react';
import ProfilePreview from '../components/ProfilePreview';
import Post from '../components/Post';
import Leaderboard from '../components/Leaderboard';

const Homepage = () => {
  return (
    <div>
        <ProfilePreview />
        <Post />
        <Leaderboard />
    </div>
  )
}

export default Homepage;