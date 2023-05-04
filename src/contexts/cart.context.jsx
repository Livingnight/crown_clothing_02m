import { createContext, useReducer } from 'react'
import { createAction } from '../utils/reducer/reducer.util'

const addCartItem = (cartItems, productToAdd) => {
  // find if item is in cart
  const foundItem = cartItems.find(cartItem => {
    return cartItem.id === productToAdd.id
  })

  // if found, increment quantity
  if (foundItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  // return new array with modified cartItems/cost of item
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}
const removeCartItem = (cartItems, productToRemove) => {
  const foundItem = cartItems.find(
    cartItem => cartItem.id === productToRemove.id
  )

  if (foundItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
  }
  return cartItems.map(cartItem =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(item => item.id !== cartItemToClear.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartItemCount: 0,
  cartTotal: 0,
})

export const CART_ACTION_TYPES = {
  TOGGLE_CART_OPEN: 'TOGGLE_CART_OPEN',
  // Cart Items Count
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART: 'REMOVE_ITEM_FROM_CART',
  CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART',
  // Item Count types
  SET_ITEM_COUNT: 'SET_ITEM_COUNT',
  // Cart Total Types
  SET_CART_TOTAL: 'SET_CART_TOTAL',
  UPDATE_CART_ITEMS: 'UPDATE_CART_ITEMS',
}

const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      }
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      return {
        ...state,
        ...payload,
      }
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`)
  }
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartItemCount: 0,
  cartTotal: 0,
}

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartItemCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE)

  const setIsCartOpen = () =>
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN, !isCartOpen))

  const updateCartItemReducer = newCartItems => {
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )

    const payload = {
      cartItems,
      cartItemCount: newCartCount,
      cartTotal: newCartTotal,
    }

    dispatch(createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload))
  }

  const addItemToCart = productToAdd => {
    console.log('product to add: ', productToAdd)
    const cartWithAddedItem = addCartItem(cartItems, productToAdd)
    updateCartItemReducer(cartWithAddedItem)
  }

  const removeItemFromCart = productToRemove => {
    const cartWithRemovedItem = removeCartItem(cartItems, productToRemove)
    updateCartItemReducer(cartWithRemovedItem)
  }

  const clearItemFromCart = productToClear => {
    const cartWithoutClearedItem = clearCartItem(cartItems, productToClear)
    updateCartItemReducer(cartWithoutClearedItem)
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItemCount,
    cartTotal,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
