import React from 'react'
import { Layout, Profile, Repositories } from './containers';
import GithubProvider from './providers/github-provider';

import './global/destyle.css'

const App = () => {
  return (
    <main>
      <GithubProvider>
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App