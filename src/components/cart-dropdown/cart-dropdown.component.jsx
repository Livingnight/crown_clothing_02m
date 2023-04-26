import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext)

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
            />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to='/checkout' onClick={() => setIsCartOpen(false)}><Button>GO TO CHECKOUT</Button></Link>
    </CartDropdownContainer>
  )
}

export default CartDropdown
