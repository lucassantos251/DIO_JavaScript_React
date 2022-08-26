import React, { useState } from 'react'
import { Button } from '../../components'
import useGithub from '../../hooks/github-hooks'
import './index.css'

const Header = () => {
  const { getUser } = useGithub()
  const [usernameForSearch, setUsernameForSearch] = useState('')

  const submitGetUser = () => {
    if(!usernameForSearch){
      return
    }
    return getUser(usernameForSearch)
  }

  return (
    <header>
      <div className='header-wrapper'>
        <input type='text' placeholder='Digite o username para pesquisa' onChange={(event) => setUsernameForSearch(event.target.value)}></input>
        <Button className='header-wrapper' type='submit' onClick={submitGetUser}>Buscar</Button>
      </div>
    </header>
  )
}

export default Header