import React from 'react'
import PropTypes from 'prop-types'

export default function PetShop(props) {
  const {dogs, cats, customers, customerName, onClick} = props

  return (
    <div>
      <h1>Dogs: {dogs}</h1>
      <h2>Cats: {cats}</h2>
      <div>
        Quantidade de Clientes: {customers}
      </div>
      <div>
        Nome do cliente: {customerName}
      </div>
      <button onClick={onClick}>Agendar Banho</button>
    </div>
  )
}

PetShop.defaultProps = {
  cats: 0,
  customers: [],
}

PetShop.propTypes = {
  dogs: PropTypes.number.isRequired,
  cats: PropTypes.number,
  customers: PropTypes.array,
  customerName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.oneOf(['Completed','Disabled'])
}
