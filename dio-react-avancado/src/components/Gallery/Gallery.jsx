import React, { memo, useState } from 'react'
import Button from '../Button/Button'

const Gallery = memo((props) => {
  const {photos} = props
  const [gallery, setGallery] = useState(photos)

  const handleRemove = (key) =>{
    const newGallery = gallery.filter((img, index) => index !== key)
    setGallery(newGallery)
  }

  const renderPhotos = (img, key) => {
    return (
      <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0px 10px',}}> 
        <img src={img} alt="Imagem Aleatoria" />
        <div>
          <Button onClick={() => handleRemove(key)}>Remover {key}</Button>          
        </div>
      </div>
    )
  }

  return (
    <div>
      {gallery.map(renderPhotos)}
    </div>
  )
})

export default Gallery