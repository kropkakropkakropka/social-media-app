import React from 'react'

function ProfilePreview() {
  return (
    <div id='profile-preview'>
      <img src='https://avatars.githubusercontent.com/u/66757774?v=4' />
      <div>
        <h1>Jack Newton</h1>
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