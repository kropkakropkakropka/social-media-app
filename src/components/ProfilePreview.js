import React from 'react'

function ProfilePreview(props) {
  return (
    <div id='profile-preview'>
      <img className='profile-picture' src={props.img} alt='profile picture' />
      <div>
        <h2>{props.fullName}</h2>
        <section className="stats">
          <p>0</p>
          <p>0</p>
        </section>
        <section className='xp-bar'>
          <div>s</div>
          <div>xp bar</div>
        </section>
      </div>
    </div>
  )
}

export default ProfilePreview