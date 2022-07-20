import React from 'react'
import { Profile, Repo } from './containers';
import { Button } from './components'

import './App.css'

export default function App() {
  return (
    <div className='app-wrapper'>
      <h1>GitHub Project</h1>

      <div className='app-content'>
        <Profile />
        <Repo />
      </div>

      <Button>Botão</Button>

    </div>
  );
}
