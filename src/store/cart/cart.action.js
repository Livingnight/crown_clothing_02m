import { createAction } from '../../utils/reducer/reducer.util'
import { CART_ACTION_TYPES } from './cart.types'

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToRemove.id
  )

  if (existingCartItem === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
  }

  return cartItems.map(cartItem =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

export const clearCartItem = (cartItems, productToClear) =>
  cartItems.filter(cartItem => cartItem.id !== productToClear.id)

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd)

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove)

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = clearCartItem(cartItems, productToClear)

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const setIsCartOpen = boolean =>
  createAction(CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN, !boolean)
