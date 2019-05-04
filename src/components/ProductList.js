import React from 'react'
import productData from '../data/products'
import ProductDetails from './ProductDetails'

function ProductList () {
  const productComponents = productData.map(item => <ProductDetails key={item.id} product={item} />)
  return 	(
    <div>
      {productComponents}
    </div>
  )
}
export default ProductList
