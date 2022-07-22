import React from 'react'

export default function Button({ children, onClick, type, className }) {
  return (<button className={className} type={type} onClick={onClick}>{children}</button>)
}