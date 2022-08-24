import React from 'react'

function ProfilePreview() {
  return (
    <div id='profile-preview'>
      <img className='profile-picture' src='https://avatars.githubusercontent.com/u/66757774?v=4' alt='profile picture' />
      <div>
        <h2>Jack Newton</h2>
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