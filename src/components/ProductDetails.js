import React from 'react'

function Product (props) {
  const { product } = props
  return (
    <div>
      <h2>{product.name}</h2>
      <p>INR {product.price} - {product.description}</p>
    </div>
  )
}

export default Product
