import React from 'react'
import ProfilePreview from './components/ProfilePreview';
import Post from './components/Post';
import Leaderboard from './components/Leaderboard';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <ProfilePreview />
        <Post />
        <Leaderboard />
      </div>
    </Router>
  );
}

export default App;
