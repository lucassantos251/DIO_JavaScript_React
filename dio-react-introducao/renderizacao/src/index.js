import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import Button from './Button'
import ComponenteA from "./ComponenteA"
import ComponenteB from "./ComponenteB"
import "./styles.css"

const element = 'DIO';
const element2 = <h1>Olá</h1>

function soma(a,b){
    alert(a+b);
}

function App() {

    return (
        <div>
            {element}
            {element2}
            <Button onClick={() => soma(1,2)} name='Lucas'/>

            <ComponenteA>
                <ComponenteB>
                    <Button onClick={() => soma(2,3)} name="Num Sei" />
                </ComponenteB>
            </ComponenteA>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)