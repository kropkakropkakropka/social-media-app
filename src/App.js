import React from 'react'

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import ProfilePreview from './components/ProfilePreview';
import Post from './components/Post';
import Leaderboard from './components/Leaderboard';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='container'>
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
