import { Route, Routes } from 'react-router-dom'
import NavBar from './layout/main_navigation.component'
import Home from './pages/Home'
import NotFound from './pages/not-found.component'
import Shop from './pages/Shop'

function App() {
	return (
		// NOTE: Will need "Outlet" to show component children
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
					path='/shop'
					element={<Shop />}
				/>
				{/*NOTE: Not Found Route */}
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Route>
		</Routes>
	)
}

export default App
