import React from 'react'
import { useState } from 'react'
import { Button } from '../../components'

const Header = () => {
  const [usernameForSearch, setUsernameForSearch] = useState('')

  function submitGetUser () {

  }

  return (
    <div>
      <h1>GitHub Project</h1>
      <p>Buscador:
        <input type='text' placeholder='Digite o username para pesquisa' onChange={(event) => setUsernameForSearch(event.target.value)}></input>
        <Button type='submit' onClick={submitGetUser}>Buscar</Button>
      </p>
    </div>
  )
}

export default Header