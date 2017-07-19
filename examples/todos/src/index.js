import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { createLogger } from 'redux-logger'

import reducer from './reducers'
import Root from './components/Root'

const enhancers = []
const initialState = {}
const history = createHistory()

const loggerMiddleware = createLogger()

// redux dev tools integration
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  } 
}

const composedEnhancers = compose(
  applyMiddleware(
    loggerMiddleware,
    routerMiddleware(history)
  ),
  ...enhancers  
)

const store = createStore(
  reducer,
  initialState,
  composedEnhancers
)

render(
  <Root store={store} />,
  document.getElementById('root')
)
