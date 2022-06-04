import React from 'react'
import { Card } from './styles/ProductCard.styled'

const ProductCard = (props) => {
  return (
    <>
      <Card>
        <img src={props.url} alt="" />

        <div className="product-text">
          <h3>{props.desc}</h3>
          <p>{props.quantity}</p>
          <p className="product-price">${props.price}</p>
        </div>


      </Card>
    </>
  )
}

export default ProductCard