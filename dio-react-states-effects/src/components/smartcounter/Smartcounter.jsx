import React from 'react'
import {useState} from 'react';

const SmartCounter = () => {
  //retorna um vetor
  //1. variavel stateful
  //2. função amarrada a essa variável que atualiza esse valor
  const [quantity, setQuantity] = useState(1);

  return ( 
      <>
        <h1>{quantity}</h1>
        <button onClick={() => setQuantity(quantity+1)}>Aumentar</button>
      </>
   );
}
 
export default SmartCounter;