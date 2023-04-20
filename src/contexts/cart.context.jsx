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
const updateQuantity = (cartItems, id, amount) => {
  return cartItems.map(cartItem =>
    cartItem.id === id
      ? { ...cartItem, quantity: cartItem.quantity + parseInt(amount) }
      : cartItem
  )
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
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
  const updateItemQuantity = (id, amount) => {
    console.log('made it to here from checkout page')
    setCartItems(updateQuantity(cartItems, id, amount))
  }
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    updateItemQuantity,
    cartItemCount,
    cartTotal,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
