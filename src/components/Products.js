import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'


const Products = () => {
  // TODO - fetch all products from the store
  const allProducts = useSelector((store) => store.products.productList)

  return (
    <div className="products">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products
