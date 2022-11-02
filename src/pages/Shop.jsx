import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Shop() {
	return (
		<div>
			<h1>This is the shop page!</h1>
			<Outlet />
		</div>
	)
}
