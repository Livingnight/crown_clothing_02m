import { createContext, useState } from 'react'

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
})

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false)
	const [cartItems, setCartItems] = useState([])

	const addItemToCart = product => setCartItems(addCartItem(cartItems, product))

	const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart }

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
