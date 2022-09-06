import React, { useEffect } from 'react'
import ProfilePreview from '../components/ProfilePreview';
import Post from '../components/Post';
import ProfileInfo from '../components/ProfileInfo';
import { getProfileDetails } from '../redux/profile/profileActions';
import { logout } from '../redux/profile/profileSlice'
import Leaderboard from '../components/Leaderboard';
import { useDispatch, useSelector } from 'react-redux';

const ProfilePage = () => {

  const { profileInfo, accessToken } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(getProfileDetails())
    }
  }, [accessToken, dispatch])

  const {firstname, lastname, username, desc, profileImg, xp, posts, friends} = profileInfo;
  const fullName = firstname + ' ' + lastname;

  return (
    <section id='profile-page'>
      <section>
        <ProfileInfo fullName={fullName} img={profileImg} description={desc} username={username} posts={posts.length} friends={friends.length} />
      </section>
      <section>
        <Post username={username}/>
      </section>
    </section>
  )
}

export default ProfilePage 