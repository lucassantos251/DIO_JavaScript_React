import React, { useEffect, useState } from 'react';
import { ThemeContext, themes } from './Themes'; 
import Card from './Card.js'
import Twitter from './Twitter';

export default function Copy() {
  const [posts, setPosts] = useState({
    post: 'ola',
    description: 'descricao'
  })
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState(true)
  const [token, setToken] = useState()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [setLoading])

  useEffect(() => {
    setTimeout(() => {
      setToken('32a4sdf23s4dfsdadfb')
    }, 4000)
  }, [setToken])
  

  const onRemove = () => {
    return setActive(false);
  }
  
  return (
    <ThemeContext.Provider value={{...themes.primary, token}}>
      <h1>Hello</h1>
      {active && (<Twitter posts={posts} loading={loading} />)}
      <button onClick={onRemove}>Remover Componente</button>
      <Card />
    </ThemeContext.Provider>
  );
}
