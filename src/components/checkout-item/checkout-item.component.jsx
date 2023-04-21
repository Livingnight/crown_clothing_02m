import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({ cartItem }) => {
  const { cartTotal, removeItemFromCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext)

  const { id, imageUrl, name, quantity, price } = cartItem

  return (
    <div className='checkout-item-container'>
      <div
        key={id}
        className='checkout-item-container'
      >
        <div>
          <img
            src={imageUrl}
            alt={`${name}`}
          />
        </div>
        <div>
          <h2>Description</h2>
          <span>{name}</span>
        </div>
        <div>
          <h2>Quantity</h2>
          <i
            onClick={() => removeItemFromCart(id)}
            className='fa-solid fa-chevron-left'
          ></i>
          {quantity}
          <i
            onClick={() => addItemToCart(cartItem)}
            className='fa-solid fa-chevron-right'
          ></i>
        </div>
        <div>
          <h2>Price</h2>
          <span>${quantity * price}</span>
        </div>
        <div>
          <h2>Remove</h2>
          <button
            onClick={() => clearItemFromCart(cartItem)}
            type='button'
          >
            x
          </button>
        </div>
      </div>
      <div>Total: {cartTotal}</div>
    </div>
  )
}

export default CheckoutItem
