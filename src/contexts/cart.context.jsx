import { createContext, useState, useEffect } from 'react'

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
const removeCartItem = (cartItems, id, amount) => {
  const foundItem = cartItems.find(cartItem => cartItem.id === id)

  if (foundItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== id)
  }
  return cartItems.map(cartItem =>
    cartItem.id === id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(item => item.id !== cartItemToClear.id)
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  clearItemFromCart: () => { },
  cartItemCount: 0,
  cartTotal: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartItemCount, setCartItemCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const cartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    const total = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    setCartItemCount(cartCount)
    setCartTotal(total)
  }, [cartItems])

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  const removeItemFromCart = (id, amount) => {
    console.log('made it to here from checkout page')
    setCartItems(removeCartItem(cartItems, id, amount))
  }
  const clearItemFromCart = itemToClear => {
    setCartItems(clearCartItem(cartItems, itemToClear))
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
