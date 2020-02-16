import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from './history'

import AccountConfirm from './screens/accountConfirm'
import Register from './screens/register'
import Menu from './screens/menu'

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={AccountConfirm} />
        <Route path="/register" component={Register} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </Router>
  )
}

export default App
