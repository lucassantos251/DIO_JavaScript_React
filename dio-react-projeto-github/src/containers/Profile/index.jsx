import React, { useEffect } from 'react'
import useGithub from '../../hooks/github-hooks'
import './index.css'

const Profile = () => {
  const { githubState } = useGithub()

  useEffect(() => {
    console.log(githubState.user)
  
  }, [githubState])
  
  
  return (
    <div className='profile-wrapper'>
      <img className='profile-wrapper-img' src={githubState.user.avatar_url} alt='user avatar'/>
      <div className='profile-wrapper-info-user'>
        <div>
          <h1>{githubState.user.name}</h1>
          <div className='profile-wrapper-user-generic'>
            <h3>Username:</h3>
            <a href={githubState.user.html_url} target='_blank' rel='noreferrer'>{githubState.user.login}</a>
          </div>
          <div className='profile-wrapper-user-generic'>
            <h3>Company:</h3>
            <span>{githubState.user.company}</span>
          </div>
          <div className='profile-wrapper-user-generic'>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </div>
          <div className='profile-wrapper-user-generic'>
            <h3>Blog:</h3>
            <a href={githubState.user.blog} target='_blank' rel='noreferrer'>{githubState.user.blog}</a>
          </div>
        </div>
        <div className='profile-wrapper-status-count'>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
