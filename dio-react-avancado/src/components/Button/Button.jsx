import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

export default function Button({children, onClick}) {
  return (
    <button className='button' onClick={onClick}>{children}</button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}