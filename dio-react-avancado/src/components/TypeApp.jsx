import React from 'react'
import PropTypes from 'prop-types'
import PetShop from './PetShop'

export default function TypeApp() {
  const handleClick = () => {
    console.log('Agendado')
  }
  return (
    <PetShop dogs={1} customerName='Lucas' onClick={handleClick} status={'Completed'}/>
  )
}
