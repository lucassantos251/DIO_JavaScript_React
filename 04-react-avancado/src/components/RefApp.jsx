import React, {useRef, useEffect, useState} from 'react'

export default function RefApp() {
  const inputRef = useRef()
  const count = useRef(1)
  const [value, setValue] = useState(false)

  const handleClick = () =>{
    inputRef.current.focus()
  }

  useEffect(() => {
    setTimeout(() => {
      count.current = 300
      //só renderiza por causa do setState
      setValue(true)
    }, 3000);
  }, [])
  
  return (
    <div>
      <h1>Valor de count: {count.current}</h1>
      Foco: <input ref={inputRef}/>
      <button onClick={handleClick}>Focar</button>
    </div>
  )
}
