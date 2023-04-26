import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles'

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return cartItems.length ? (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(cartItem => (
        <CheckoutItem
          key={cartItem.id}
          cartItem={cartItem}
        />
      ))}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  ) : (
    <CheckoutContainer>
      <h2>Your Cart Is Empty</h2>
    </CheckoutContainer>
  )
}

export default CheckoutPage
