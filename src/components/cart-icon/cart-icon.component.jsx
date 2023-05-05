import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { setIsCartOpen } from '../../store/cart/cart.action'

import {
  selectCartItemCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector'
import { CartItemContainer, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartItemCount = useSelector(selectCartItemCount)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(isCartOpen))

  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartItemContainer>
  )
}

export default CartIcon
