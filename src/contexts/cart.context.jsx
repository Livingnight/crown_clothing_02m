import { createContext, useEffect, useState } from 'react'

export const addCartItem = (cartItems, itemToAdd) => {
	console.log('Add Cart Item: Cart Context')
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === itemToAdd.id
	)

	if (existingCartItem) {
		console.log('existingCartItem truthy')
		return cartItems.map(cartItem =>
			cartItem.id === itemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		)
	}
	console.log('existingCartItem falsy')

	const newCartItems = [...cartItems, { ...itemToAdd, quantity: 1 }]
	console.log('new cart items: ' + JSON.stringify(newCartItems))
	return newCartItems
}

export const CartContext = createContext({
	isCartOpen: false,
	setIsOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartItemCount: 0,
})

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState([])
	const [cartItemCount, setCartItemCount] = useState(0)

	useEffect(() => {
		const count = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		)
    setCartItemCount(count)
	}, [cartItems])

	const addItemToCart = product => setCartItems(addCartItem(cartItems, product))

	const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartItemCount}

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
