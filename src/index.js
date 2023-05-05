import React from 'react'
import App from './App'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './index.scss'
import { store } from './store/store'

const rootElement = document.getElementById('root')

const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
