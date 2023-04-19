import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext)
  return (
    <div className='checkout-page-container'>
      {cartItems.map(item => (
        <div className='checkout-item-container'>
          <div>
            <img
              src={item.imageUrl}
              alt={`${item.name}`}
            />
          </div>
          <div>
            <h2>Description</h2>
            <span>{item.name}</span>
          </div>
          <div>
            <h2>Quantity</h2>
            <span>{item.quantity}</span>
          </div>
          <div>
            <h2>Price</h2>
            <span>{item.quantity * item.price}</span>
          </div>
          <div>
            <h2>Remove</h2>
            <button type='button'>x</button>
          </div>
          <div></div>
          <span>Total: ${cartTotal}</span>
        </div>
      ))}
    </div>
  )
}

export default CheckoutPage
