import React from "react"
import {createRoot} from "react-dom/client"
import "./styles.css"

function sum(a:number, b:number) {
  return a + b
}

function primeiroJSX() {
  return (
    <div className="teste">
      <h1>Lucas Santos - Introdução e configuração do ReactJS.</h1>
      Soma: {sum(10, 20)}
    </div>
  )
}


const App = () => {

  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  )
}

const rootElement = document.getElementById("root") as HTMLElement;
const root = (createRoot(rootElement))
root.render(<App />)