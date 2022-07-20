import React from 'react'
import './index.css'

export default function Button({ children, onClick }) {
  return (<button onClick={onClick}>{children}</button>)
}