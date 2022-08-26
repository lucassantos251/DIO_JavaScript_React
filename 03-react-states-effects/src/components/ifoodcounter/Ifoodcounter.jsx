import './Ifoodcounter.css'
import React, {useState,useEffect} from 'react'

export default function Ifoodcounter() {
  const [value, setValue] = useState(0);
  const [buttonStyle, setButtonStyle] = useState('counter-button-minus-desactive');
  const [price, setPrice] = useState(0);
  
  useEffect(()=> {
    setPrice(value*12.00)
  },[value])

  function down(){
    if(value <=1 ){
      setButtonStyle('counter-button-minus-desactive')
    }
    if(value>0){
      setValue(value-1);
    }
  }

  function up(){
    setValue(value+1);
    setButtonStyle('counter-button-minus-active')
  }

  return (
    <div className='countex-wrapper'>
      <button className={buttonStyle} onClick={down}>-</button>
      <p>{value}</p>
      <button className='counter-button-plus-active'onClick={up}>+</button>
      <button id='moeda'>{price}</button>
    </div>
  )
}
