import React, { Fragment } from 'react'

const store = [{
  type: 'Roupa'
},{
  type: 'Calçado'
},{
  type: 'Camiseta'
}]

function Column({ type }) {
  return (
    <tr>
      <td>{type}</td>
    </tr>
  )
}

export default function ErrorApp() {
  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column type={element.type}/>
    </Fragment>
  )
  return (
    <table>
      {store.map(renderColumns)}
    </table>
  )
}
