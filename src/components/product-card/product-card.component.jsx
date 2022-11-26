import './product-card.styles.scss'

import Button from '../button/button.component'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product
	const { cartItems, addItemToCart } = useContext(CartContext)

	const addProductToCart = () => {
		console.log('Add To Cart Clicked: Product Card')
    console.log('Cart Items: ' + JSON.stringify(cartItems))
		addItemToCart(product)
	}

	return (
		<div className='product-card-container'>
			<img
				src={imageUrl}
				alt={`${name}`}
			/>
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button
				buttonType='inverted'
				onClick={addProductToCart}
			>
				Add To Cart
			</Button>
		</div>
	)
}

export default ProductCard
