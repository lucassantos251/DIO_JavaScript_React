import React, { Component } from 'react'
import Counter from './Counter'

const Buttons = ({increment, decrement, count}) => (
  <div>
      <h1>Valor Atual: {count}</h1>
    <div>
      <button onClick={increment}>Incrementar</button>
    </div>
    <div>
      <button onClick={decrement}>Decrementar</button>
    </div>
  </div>
)

export default class RenderApp extends Component {
  render() {
    return (
      <div><Counter render={
        ({increment,decrement,count}) => (
          <Buttons increment={increment} decrement={decrement} count={count} />
        )}></Counter></div>
    )
  }
}
