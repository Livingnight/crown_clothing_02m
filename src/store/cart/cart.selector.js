import { createSelector } from 'reselect'

const selectCartReducer = state => state.cart

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  cart => cart.isCartOpen
)

export const selectCartItems = createSelector(
  [selectCartReducer],
  cart => cart.cartItems
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity
    }, 0)
)

export const selectCartItemCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity
    }, 0)
)
