import React from 'react'
import PropTypes from 'prop-types'
import createHistory from 'history/createBrowserHistory'

import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import App from './App'

const history = createHistory()

const Root = ({ store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/:filter?" component={App} />
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
