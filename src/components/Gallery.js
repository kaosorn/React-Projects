import React from 'react'
import Nav from './Navbar'
import shirtdata from './shirtdata'
import { ShirtGallery } from './styles/Gallery.styled'


const Gallery = () => {

  const shirtelements = shirtdata.map(products => (
    <img alt="" src={products.url} />
  ))
    
  return (
    <>
        <Nav />
        <ShirtGallery>
        {shirtelements}
        </ShirtGallery>
        
    </>
  )
}

export default Gallery