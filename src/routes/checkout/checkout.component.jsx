import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles'

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
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
