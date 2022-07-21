import React from 'react'
import './index.css'

const Profile = () => {
  return (
    <div className='profile-wrapper'>
      <img className='profile-wrapper-img' src='https://avatars.githubusercontent.com/u/54688253?v=4' alt='user avatar'/>
      <div className='profile-wrapper-info-user'>
        <div>
          <h1>Lucas Santos</h1>
          <div className='profile-wrapper-username'>
            <h3>Username:</h3>
            <a href='https://github.com/lucassantos251' target='_blank' rel='noreferrer'>lucassantos251</a>
          </div>
        </div>
        <div className='profile-wrapper-status-count'>
          <div>
            <h4>Followers</h4>
            <span>0</span>
          </div>
          <div>
            <h4>Starred</h4>
            <span>0</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
