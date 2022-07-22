import React from 'react'
import Header from '../Header'
import useGithub from '../../hooks/github-hooks'
import './index.css'

function Layout({ children }) {
  return (
    <section className='layout-wrapper'>
      <Header />
      {children}
    </section>
  )
}

export default Layout