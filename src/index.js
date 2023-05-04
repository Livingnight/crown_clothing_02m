import React from 'react'
import App from './App'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { CartProvider } from './contexts/cart.context'
// import { CategoriesProvider } from './contexts/categories.context'
// import { UserProvider } from './contexts/user.context'

import './index.scss'
import { store } from './store/store'

const rootElement = document.getElementById('root')

const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
            {/* <CartProvider> */}
              <App />
            {/* </CartProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
