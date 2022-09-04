import React from 'react'
import ProtectedRoute from './routing/ProtectedRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <div className='bg-primary'>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route exact path="/homepage" element={<Homepage />} />
            <Route exact path="/profilepage" element={<ProfilePage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
