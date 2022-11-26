import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../src/assets/crown.svg'
import CartDropdown from '../components/cart-dropdown/cart-dropdown.component'
import CartIcon from '../components/cart-icon/cart-icon.component'
import { CartContext } from '../contexts/cart.context'
import { UserContext } from '../contexts/user.context'
import { logOutUser } from '../utils/firebase/firebase.utils'

import './main_navigation.styles.scss'

export default function NavBar() {
	const { currentUser } = useContext(UserContext)
	const { isCartOpen } = useContext(CartContext)

	return (
		<Fragment>
			<nav className='navbar-container'>
				<Link
					className='logo-container'
					to='/'
				>
					<CrwnLogo className='logo' />
				</Link>

				<div className='nav-links'>
					<Link
						className='nav-item'
						to='/shop'
					>
						Shop
					</Link>
					{currentUser ? (
						<Link
							className='nav-item'
							onClick={logOutUser}
						>
							SIGN OUT
						</Link>
					) : (
						<Link
							to='/auth'
							className='nav-item'
						>
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</nav>
			<Outlet />
		</Fragment>
	)
}
