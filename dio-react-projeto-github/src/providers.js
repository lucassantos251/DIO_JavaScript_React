import React from 'react'
import App from './App'
import GithubProvider from './providers/github-provider'

import './global/destyle.css'

function Providers() {
  return (
    <main>
      <GithubProvider>
        <App/>
      </GithubProvider>
    </main>
  )
}

export default Providers