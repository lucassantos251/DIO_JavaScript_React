import React from 'react'
import { Layout, Profile, Repositories, Starred } from './containers';

import './global/destyle.css'

const App = () => {
  return (
    <main>
      <Layout>
        <Profile />
        <Repositories />
        <Starred />
      </Layout>
    </main>
  );
}

export default App
