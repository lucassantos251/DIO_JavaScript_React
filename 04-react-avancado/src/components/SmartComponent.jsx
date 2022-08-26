import React from 'react'
import Gallery from './Gallery/Gallery'

export default function SmartComponent() {
  const photos = [
    'http://placeimg.com/200/100/people',
    'http://placeimg.com/200/100/animals',
    'http://placeimg.com/200/100/tech',
    'http://placeimg.com/200/100/any',
    'http://placeimg.com/200/100/nature',
  ]
  return (
    <div>
      <h1>Galeria de Fotos</h1>
      <Gallery photos={photos}/>
    </div>
  )
}
