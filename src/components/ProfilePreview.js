import React from 'react'
import { Link } from 'react-router-dom';

function ProfilePreview(props) {
  return (
    <div id='profile-preview'>
      <img className='profile-picture' src={props.img} alt='profile picture' />
      <div>
        <h2><Link id='profile-link' to="/profilepage">{props.username}</Link></h2>
        <section className='xp-bar'>
          <div>s</div>
          <div>xp bar</div>
        </section>
      </div>
    </div>
  )
}

export default ProfilePreview