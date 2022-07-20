import React from 'react'
import { Profile, Repo } from './containers';
import { Button } from './components'

export default function App() {
  return (
    <div>
      <h1>GitHub Project</h1>
      <Profile />
      <Repo />
      <Button>Botão</Button>
    </div>
  );
}
