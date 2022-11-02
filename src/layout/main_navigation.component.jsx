import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../src/assets/crown.svg'

import './main_navigation.styles.scss'

export default function NavBar() {
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
					<Link
						className='nav-item'
						to='/sign-in'
					>
						Sign In
					</Link>
				</div>
			</nav>
			<Outlet />
		</Fragment>
	)
}
