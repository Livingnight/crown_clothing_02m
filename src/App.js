import { Route, Routes } from 'react-router-dom'
import NavBar from './layout/main_navigation.component'
import Home from './pages/home/home.page'
import NotFound from './pages/not-found/not-found.component'
import Shop from './pages/shop/Shop'
import Auth from './pages/auth/auth.page'

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
				{/* NOTE: Auth route for signing up or signing in */}
				<Route
					path='auth'
					element={<Auth />}
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
