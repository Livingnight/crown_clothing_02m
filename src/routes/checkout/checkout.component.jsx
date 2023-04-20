import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss'

const CheckoutPage = () => {
  const { cartItems, cartTotal, updateItemQuantity } = useContext(CartContext)
  const updateQuantities = (id, quantity) => {
    console.log('Changing Quantities')
    updateItemQuantity(id, quantity)
  }
  return (
    <div className='checkout-page-container'>
      <>
        {console.log('CartItems From Checkout page', cartItems)}
        {cartItems.map(item => (
          <div
            key={item.id}
            className='checkout-item-container'
          >
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
              <i
                onClick={() => updateQuantities(item.id, -1)}
                className='fa-solid fa-chevron-left'
              ></i>
              {item.quantity}
              <i
                onClick={() => updateQuantities(item.id, 1)}
                className='fa-solid fa-chevron-right'
              ></i>
            </div>
            <div>
              <h2>Price</h2>
              <span>${item.quantity * item.price}</span>
            </div>
            <div>
              <h2>Remove</h2>
              <button type='button'>x</button>
            </div>
          </div>
        ))}
        <div>Total: {cartTotal}</div>
      </>
    </div>
  )
}

export default CheckoutPage
