//responsavel por guardar e buscar os dados de perfil e repo
import React, { createContext, useCallback, useState} from 'react'
import api from '../services/api'

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
})

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user:{
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  })

  const getUser = (username) => {
    // api.get(`users/${username}`)
    // .then(({ data })) => {

    // }
  }



  const getUserRepos = (username) => {
    // api.get(`users/${username}/repos`)
    //   .then(({data})) => {

    //   }
  }

  const getUserStarred = (username) => {
    // api.get(`users/${username}/starred`)
    //   .then(({data})) => {

    //   }
  }

  const contextValue = {
    githubState,
    // getUser:
    // getUserRepos:
    // getUserStarred:
  }
  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )    

}

export default GithubProvider