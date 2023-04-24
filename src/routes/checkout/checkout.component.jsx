import React, { useContext } from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss'

const CheckoutPage = () => {
  const {
    cartItems,
  } = useContext(CartContext)
  return (
    <div className='checkout-page-container'>
      {cartItems.map(cartItem => (
        <CheckoutItem cartItem={cartItem} />
      ))}
    </div>
  )
}

export default CheckoutPage
