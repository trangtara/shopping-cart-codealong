import React from 'react'
import { CartItem } from './CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {

  const products = useSelector((store) => store.cart.cartItems)

  // TODO - calculate total from the sum of all products in the cart
  
  const totalPrice = useSelector((store) => (
    store.cart.cartItems.reduce((accumulator, currentValue) => (
      accumulator + (currentValue.price * currentValue.quantity)
    ), 0)
  ))

  return (
    <div className="cart">
      <div className="total">
        <span className="emoji" role="img" aria-label="cart">🛒</span>
        <div className="amount">Total: {totalPrice}</div>
      </div>

      <ul className="items">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}
export default Cart
