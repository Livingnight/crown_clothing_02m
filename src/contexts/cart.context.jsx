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

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  cartItemCount: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartItemCount, setCartItemCount] = useState(0)

  useEffect(() => {
    const cartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity, 0
    )
    setCartItemCount(cartCount)
  }, [cartItems])

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
