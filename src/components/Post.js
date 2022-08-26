import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faComment } from '@fortawesome/free-solid-svg-icons'

function Post() {
    return (
        <section id='posts'>
            <article className='post'>
                <div className='post-info'>
                    <div className="user-info">
                        <img className='profile-picture' src='https://avatars.githubusercontent.com/u/66757774?v=4' alt='profile picture' />
                        <h3>Jack Newton</h3>
                    </div>
                    <p>2022</p>
                </div>
                <section className='content'>
                    this is content
                    this is content
                </section>
                <section className='stats'>
                    <FontAwesomeIcon className='icon' icon={faArrowUp}></FontAwesomeIcon>
                    <span>0</span>
                    <FontAwesomeIcon className='icon' icon={faArrowDown}></FontAwesomeIcon>
                    <FontAwesomeIcon className='icon' icon={faComment}></FontAwesomeIcon>
                </section>
            </article>
        </section>

    )
}

export default Post