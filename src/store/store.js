import { applyMiddleware, compose, createStore } from 'redux'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
)

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

// root-reducer
export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)
