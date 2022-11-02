import { Route, Routes } from 'react-router-dom'
import NavBar from './layout/main_navigation.component'
import Home from './pages/home/home.page'
import NotFound from './pages/not-found/not-found.component'
import Shop from './pages/shop/Shop'
import SignInPage from './pages/sign-in/sign-in.page'
import { SignUpPage } from './pages/sign-up/sign-up.page'

function App() {
	return (
		// NOTE: Will need "Outlet" to show component children with this design pattern
		<Routes>
			{/* NOTE:  */}
			<Route
				path='/'
				element={<NavBar />}
			>
				{/*NOTE: Home Page Route */}
				<Route
					index
					element={<Home />}
				/>
				{/* NOTE: Shop Page Route */}
				<Route
					path='shop'
					element={<Shop />}
				/>
				{/* NOTE: Sign In Route  */}
				<Route
					path='sign-in'
					element={<SignInPage />}
				/>
				{/* NOTE: Sign Up Page Route */}
				<Route
					path='sign-up'
					element={<SignUpPage />}
				/>
				{/*NOTE: Not Found Page Route */}
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Route>
		</Routes>
	)
}

export default App
