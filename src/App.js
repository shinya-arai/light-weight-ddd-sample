import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import Input from './screens/input'
import Register from './screens/register'

const history = require('history').createHashHistory;

const App = () => {
  return (
    <Router history={history()}>
      <Switch>
        <Route exact path="/" component={Input} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  )
}

export default App
