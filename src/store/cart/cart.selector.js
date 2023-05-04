/* 
isCartOpenSelector
cartItemsSelector
cartTotalSelctor
cartItemCountSelector
*/

import { createSelector } from 'reselect'

const selectCartReducer = state => state.cart

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  cartSlice => cartSlice.isCartOpen
)

export const selectCartItems = createSelector(
  [selectCartReducer],
  cart => cart.cartItems
)

export const cartTotalSelector = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity
    }, 0)
)

export const cartItemCountSelector = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity
    }, 0)
)
