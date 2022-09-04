import React from 'react'

const ProfileInfo = (props) => {

    return (
        <div className='siema'>
            <section className='profile-info'>
                <img className='profile-picture' src={props.img === '' ? 'https://avatars.githubusercontent.com/u/66757774?v=4' : props.img} alt='profile' />
                <div>
                    <h3>{props.fullName}</h3>
                    <h4>{props.username}</h4>
                </div>
            </section>
            <section>
            {props.description == '' ? 'no description' : props.description} 
            </section>
            <section className='stats'>
                <div className='xp-bar'></div>
                <div className='stats2'>
                    <p>posts <span>{props.posts}</span></p>
                    <p>friends <span>{props.friends}</span></p>
                </div>
            </section>
        </div>
    )
}

export default ProfileInfo